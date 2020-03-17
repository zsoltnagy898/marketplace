<template>
  <div class="spring">
    <h3 class="heading heading--3 heading--center heading--leading">Policies & Support</h3>
    <ul class="grid grid--gutter">
      <li v-if="application.support.termsUrl !== ''" class="grid__item grid__item--gutter grid__item--sm-1/1 grid__item--1/2 flush--sm-bottom">
        <a :href="application.support.privacyUrl" class="link link--tile ">
	<span class="chevron">
		<span class="chevron__text">
            <span class="media media--gutter media--middle">
                                <span class="media__body">
                    <span class="link__heading heading heading--4 no-gutter--all ">
                        Terms &amp; conditions
                    </span>
                                    </span>
            </span>
		</span>
		<span class="chevron__container">
			<svg focusable="false" aria-hidden="true" class="icon  icon--small  chevron__icon--red">
    <use xlink:href="#icon-chevron-right"/>
</svg>
		</span>
	</span>
        </a>
      </li>

      <li  v-if="application.support.privacyUrl !== ''" class="grid__item grid__item--gutter grid__item--sm-1/1 grid__item--1/2 flush--sm-bottom">
        <a :href="application.support.privacyUrl" class="link link--tile ">
	<span class="chevron">
		<span class="chevron__text">
            <span class="media media--gutter media--middle">
                                <span class="media__body">
                    <span class="link__heading heading heading--4 no-gutter--all ">
                        Privacy Policy
                    </span>
                                    </span>
            </span>
		</span>
		<span class="chevron__container">
			<svg focusable="false" aria-hidden="true" class="icon  icon--small  chevron__icon--red">
    <use xlink:href="#icon-chevron-right"/>
</svg>
		</span>
	</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Support',
    props: [
      'application'
    ],
    computed: {
      editions() {
        return this.application.editions.items;
      }
    }
  }
</script>
