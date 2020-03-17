<template>
  <div class="spring">
    <h3 class="heading heading--3 heading--center heading--leading">Vodafone Add-ons</h3>
    <ul class="grid grid--gutter" data-js="_equalRows" data-items=".chevron" data-sample-height=".chevron__text">
<!--      <li v-for="addon in application.addons.items" class="grid__item grid__item&#45;&#45;gutter grid__item&#45;&#45;sm-1/1 grid__item&#45;&#45;md-1/1 grid__item&#45;&#45;1/1 flush&#45;&#45;sm-bottom">-->
<!--        <a href="#" class="link link&#45;&#45;tile  link&#45;&#45;tile&#45;&#45;dark ">-->
<!--          <span class="chevron">-->
<!--            <span class="chevron__text">-->
<!--              <span class="media media&#45;&#45;gutter media&#45;&#45;middle">-->
<!--                <span class="chevron__container">-->
<!--                  <svg focusable="false" aria-hidden="true" class="icon  icon&#45;&#45;small  chevron__icon&#45;&#45;red">-->
<!--                    <use xlink:href="#icon-add-or-plus"/>-->
<!--                  </svg>-->
<!--		            </span>-->
<!--                <span class="media__body">-->
<!--                    <span class="link__heading heading heading&#45;&#45;4 no-gutter&#45;&#45;all ">-->
<!--                        {{ addon.name }}-->
<!--                    </span>-->
<!--                    <span class="description">-->
<!--                      {{ addon.description }}-->
<!--                    </span>-->
<!--                </span>-->
<!--            </span>-->
<!--		      </span>-->
<!--		      <span class="chevron__container">-->
<!--			      <svg focusable="false" aria-hidden="true" class="icon  icon&#45;&#45;small  chevron__icon&#45;&#45;red">-->
<!--              <use xlink:href="#icon-chevron-right"/>-->
<!--            </svg>-->
<!--		      </span>-->
<!--	      </span>-->
<!--        </a>-->
<!--      </li>-->
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Addons',
    props: [
      'application'
    ]
  }
</script>
