<template>
  <Card>
    <template #header>
      <ProgressBar :value="progress" animated />
    </template>
    <ChoiceForm
      v-if="!selectedProduct && currentQuestion"
      :title="currentQuestion.title"
      :disabled="hasInput && !inputValue"
      v-bind="{ options: hasInput ? { 'Continue': true } : undefined }"
      v-on="{
        submit: hasInput
          ? () => handleQuestionSubmit(this.inputValue)
          : handleQuestionSubmit
      }"
    >
      <div v-if="currentQuestion.detail">
        <Icon name="info" size="md" />
        {{ currentQuestion.detail }}
      </div>
      <component
        v-if="hasInput"
        :is="currentQuestion.input.type === 'select' ? 'Select' : 'Input'"
        class="input"
        v-model="inputValue"
      >
        <option
          v-for="(value, label) in currentQuestion.input.options"
          :value="value"
        >
          {{ label }}
        </option>
      </component>
    </ChoiceForm>
    <ProductRecommendation
      v-if="selectedProduct"
      :product="selectedProduct"
      cta="Would you like to proceed with your order?"
      @cancel="$emit('cancel', $event)"
    />
  </Card>
</template>

<script>
import Card from './Card.vue';
import ChoiceForm from './ChoiceForm.vue';
import Icon from './Icon.vue';
import Input from './Input.vue';
import ProductRecommendation from './ProductRecommendation.vue';
import ProgressBar from './ProgressBar.vue';
import Select from './Select.vue';

export default {
  name: 'vf-product-configurator',
  components: {
    Card,
    ChoiceForm,
    Icon,
    Input,
    ProductRecommendation,
    ProgressBar,
    Select
  },
  data: () => ({
    questionIndex: 0,
    inputValue: null,
    results: {}
  }),
  props: {
    questions: {
      type: Array,
      required: true,
      default: () => []
    },
    getSelectedProduct: {
      type: Function,
      required: true
    }
  },
  computed: {
    currentQuestion: function () {
      const question = this.questions[this.questionIndex] || {};

      return {
        ...question,
        input: {
          ...(question.input === true ? { type: 'input' } : question.input),
          options: {
            ...(question.input || {}).options
          }
        }
      };
    },
    hasInput: function () {
      return Boolean(this.currentQuestion.input.type);
    },
    progress: function () {
      return (this.questionIndex + 1) / (this.questions.length + 1);
    },
    selectedProduct: function () {
      return this.getSelectedProduct(this.results);
    }
  },
  methods: {
    handleQuestionSubmit(value) {
      const { key } = this.currentQuestion;

      this.$emit('questionSubmit', { key, value });

      this.results = {
        ...this.results,
        [key]: value
      };

      this.questionIndex++;
      this.inputValue = null;

      if (this.currentQuestion.input.type === 'select') {
         this.inputValue = Object.values(this.currentQuestion.input.options)[0];
      }
    }
  }
};
</script>

<style scoped>
.input {
  margin-top: 20px;
  max-width: 320px;
}
</style>
