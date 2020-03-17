<template>
  <div class="spring">
    <h3 class="heading heading--3 heading--center heading--leading">Editions & Pricing</h3>
    <div class="grid grid__item--align-center grid--flex">
      <div v-for="edition in editions"
           class="bundle-element grid__item grid__item--sm-1/1 grid__item--md-1/2 grid__item--1/3 grid__item grid__item--gutter single-bundle-elements">
        <div class="bundle">
          <h3 class="visually-hidden">{{ edition.name }}</h3>
          <div class="bundle__summary profile-bundle">
            <div class="bundle-data   bundle-data--finn   ">
              <div class="bundle-data__value  bundle-data__value--full ">
                <span class="visually-hidden"></span>
                <div class="bundle-data__heading" tabindex="0">
                  <span class="bundle-data__amount bundle-main-title" id="maintitlebundlke">{{ edition.name }}</span>
                </div>
              </div>
            </div>
            <div class="bundle-title">
            </div>
            <div class="bundle-flex">
              <div class="bundle-texts">
                <p class="bundle-price"></p>
                <div class="bundle-price__cost bundle-single-price align--left">
              <span v-for="plan in edition.plans">
                {{ plan.costs.flatPrice.formattedPrice }}
              </span>
                </div>
                <div class="align--left bundle-single-price">(per user per month, VAT included)</div>
                <div class="bundle-price__regular-price no-gutter--all">
                  <div v-if="edition.bullets.length" class="grid gutter--all edition-text-content">
                    <div v-for="bullet in edition.bullets" class="grid__item grid__item--1/1 edition-bullet-item">
                      <div class="grid grid">
                    <span class="grid__item grid__item--2/11 grid__item--align-center grid__item--middle icon-on-price">
                      <svg focusable="false" aria-hidden="true" class="icon  icon--extra-small  chevron__icon--green">
                        <use xlink:href="#icon-tick"/>
                      </svg>
                    </span>
                        <span class="grid__item grid__item--9/11">
                      <p class="edition--single-feature">
                        {{ bullet.content }}
                      </p>
                    </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bundle-button">
                <div class="bundle__select bundle__select--first">
                  <div v-on:click="addToBasket(edition)" class="button button--primary  button--primary--dark no-gutter--bottom add-to-basket">
<!--                    {{ edition.action.button.label }}-->
                    Add
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { bus } from "../../main";

  export default {
    name: 'Editions',
    props: [
      'application'
    ],
    computed: {
      editions() {
        return this.application.editions.items;
      }
    },
    methods: {
      addToBasket: function (edition) {

        var drophistory = JSON.parse(localStorage.getItem("basket")) || [];
        var isAlreadyInBasket = false;
        for(var i = 0 ; i < drophistory.length; i++) {
          var condition = (drophistory[i].hasOwnProperty("editionName") && drophistory[i].editionName === edition.name) && (drophistory[i].hasOwnProperty("id") && drophistory[i].id === this.application.config.id);
          if(condition) {
            isAlreadyInBasket = true;
            break;
          }
        }

        if(isAlreadyInBasket){
          bus.$emit('alreadyinbasket');
       } else {
          bus.$emit('addedtobasket');
          drophistory.push({title: this.application.overview.title, description: this.application.overview.description, image: this.application.overview.image, id: this.application.config.id, editionName: edition.name, editionPrice: edition.plans[0].costs.flatPrice.formattedPrice});
          localStorage.setItem("basket", JSON.stringify(drophistory));
        }
      },
      setBundleHeight(){
        let bundleTitleHeight = this.$el.querySelector('.bundle-data__value').offsetHeight;
        let bundles = document.querySelectorAll('.bundle-flex');
        for(let bundle of bundles){
          bundle.style.height = `calc(100% - ${bundleTitleHeight}px)`;
        }
      },
      identifyIfHaveFeatures() {
        let featuresArray = document.getElementsByClassName('edition--single-feature');
        let text = '';

        for (let i = 0; i < featuresArray.length; i++) {
          let thisValue = featuresArray[i].innerText;

          if (thisValue.charAt(0) === '-') {
            featuresArray[i].parentNode.parentNode.classList.add('empty-feature');
          }

          console.log(thisValue.charAt(0));
        }


      }
    },
    mounted() {
      this.setBundleHeight();
      this.identifyIfHaveFeatures();
    }
  }
</script>
