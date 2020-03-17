const Vue = window.Vue;
const $ = window.jQuery;
import rounds from './rounds';

new Vue({
  el: '#cyber-assesment',
  data() {
    return {
      message: 'Hello world!',
      rounds,
      currentRound: 0,
      isFinished: false,
      interpolatedPercentage: 0
    }
  },
  computed: {
    activeRounds() {
      return this.rounds.filter((round) => {
        let result = !this.hideQuestion(round)
        return result;
      });
    },
    questionairePercentage() {
      return Math.round((this.currentRound / this.activeRounds.length) * 100);
    }
  },
  watch: {
    questionairePercentage(nextValue, previousValue) {
      let from = previousValue;
      let to = nextValue;
      let delay = 1;
      let timeout;
      let interpolation = () => {
        if (from > to) {
          this.interpolatedPercentage = --from;

          timeout = setTimeout(interpolation, delay *= 1.1);
        } else if (from < to) {
          this.interpolatedPercentage = ++from;

          timeout = setTimeout(interpolation, delay *= 1.1);
        } else {
          clearTimeout(timeout);
        }
      };

      setTimeout(interpolation, delay);
    }
  },
  mounted() {
    this.initTooltips();
  },
  methods: {
    hideQuestion(question) {
      let result = !!question.showUnless;

      if (question.showUnless) {
        let connectivesReplaced = question.showUnless.replace(/ AND /g, ' && ').replace(/ OR /g, ' || ');
        let equalityReplaced = connectivesReplaced.replace(/ neq /g, ' !== ').replace(/ eq /g, ' === ');
        let quotesAdded = equalityReplaced.replace(/([A-Z_]+)/g, "'$&'");
        let questionNumbers = quotesAdded.match(/\d+\.\d+/g);
        let answer = quotesAdded;
        for (let qNum of questionNumbers) {
          let numbers = qNum.split('.');
          let roundNumber = numbers[0];
          let questionNumber = numbers[1];
          let searchedRound = this.rounds.find((r) => r.id == roundNumber);
          let searchedQuestion = searchedRound.questions.find((q) => q.id == questionNumber);
          answer = answer.replace(qNum, `'${searchedQuestion.answer}'`);
        }
        result = eval(answer);
        if (question.hasOwnProperty('isActive')) {
          question.isActive = !result;
        }
      }

      return result;
    },
    nextRound() {
      this.currentRound++;
      this.sendGtag();
      setTimeout(this.scrollToQuestionaireTop);
      setTimeout(this.initTooltips);
    },
    previousRound() {
      this.currentRound--;
      setTimeout(this.scrollToQuestionaireTop);
      setTimeout(this.initTooltips);
    },
    sendGtag() {
      if (this.currentRound === this.activeRounds.length) {
        window.gtag('event', 'screen_view', {
          'screen_name': 'results screen',
        });
      } else {
        window.gtag('event', 'screen_view', {
          'screen_name': 'screen #' + this.currentRound,
        });
      }
    },
    scrollToQuestionaireTop() {
      $('html, body').animate({
        scrollTop: $('#steps-indicator-section').offset().top
      })
    },
    setCancellableAnswer(value, roundId, questionId) {
      const roundIndex = this.rounds.findIndex((round) => {
        return round.id === roundId;
      });

      const questionIndex = this.rounds[roundIndex].questions.findIndex((question) => {
        return question.id === questionId;
      });

      const answer = this.rounds[roundIndex].questions[questionIndex].answer;
      if (Array.isArray(answer)) {
        let answerIndex = answer.indexOf(value);
        if (answerIndex > -1) {
          this.rounds[roundIndex].questions[questionIndex].answer.splice(answerIndex, 1);
        } else {
          this.rounds[roundIndex].questions[questionIndex].answer.push(value);
        }
      } else {
        this.rounds[roundIndex].questions[questionIndex].answer = [value];
      }
    },
    clearCancellableAnswer(value, roundId, questionId) {
      const roundIndex = this.rounds.findIndex((round) => {
        return round.id === roundId;
      });

      const questionIndex = this.rounds[roundIndex].questions.findIndex((question) => {
        return question.id === questionId;
      });

      this.rounds[roundIndex].questions[questionIndex].answer = value;
    },
    finishQuestionaire() {
      this.nextRound();
      this.isFinished = true;
    },
    initTooltips() {
      $(function () {
        let tooltips = $('[data-toggle="tooltip"]');
        if (tooltips.length) {
          tooltips.tooltip();
        }
      });
    }
  }
});
