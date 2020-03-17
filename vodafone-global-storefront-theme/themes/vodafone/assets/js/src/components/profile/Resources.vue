<template>
  <div class="spring">
    <h3 class="heading heading--3 heading--center heading--leading">Resources</h3>
    <div v-for="resource in application.resources.public.videos.items" v-if="application.resources.public.videos.items.length" class="js-accordion  accordion accordion--eqrows" data-js="_accordion">
      <div class="js-accordion-item accordion__item question-accordion question-accordion--dark">
        <div class="js-accordion-heading accordion__eqrows-content accordion__heading--eqrows">
          <div class="accordion__eqrows-inner">
            <h4 class="accordion__heading  question-accordion question-accordion--dark">
                    <span class="chevron">
                        <span class="link__icon media__image hide--sm">
                            <svg class="icon  icon--large  icon--empty" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 192 192"><defs><symbol id="3eedd447-850c-4f1e-8184-f6a05f6abc8d" data-name="Video_ic_mid" viewBox="0 0 192 192"><rect width="192" height="192" fill="none"/><path d="M141,87.62" fill="none" stroke="#fecb00" stroke-linejoin="round" stroke-width="8.06"/><path d="M164.39,56C167,53.29,172,53.22,174,58.82V134c-1.72,5.16-7,4.61-9.61,1.94L138,110v26a14,14,0,0,1-14,14H32a14,14,0,0,1-14-14V56A14,14,0,0,1,32,42h92a14,14,0,0,1,14,14V82Z" fill="none" stroke="#666" stroke-linejoin="round" stroke-width="4"/><g id="cb14d264-272b-4fdd-87d2-ee8af5a58f69" data-name="ICON"><circle cx="48" cy="72" r="10" fill="none" stroke="#e60000" stroke-linejoin="round" stroke-width="4"/></g></symbol></defs><title>video-mid</title><g id="ff56ef95-3ddd-4fe1-afc4-8c4869a1d54e" data-name="ICON"><use id="831eb27e-3fa6-4f88-b3b5-7c1df43c0534" data-name="Video_ic_mid" width="192" height="192" transform="translate(0 0)" xlink:href="#3eedd447-850c-4f1e-8184-f6a05f6abc8d"/></g></svg>


                    </span>
                        <span class="chevron__text">Watch this video</span>
                        <span class="chevron__container accordion__chevron">
                            <svg focusable="false" aria-hidden="true" class="icon  icon--small  chevron__icon">
    <use xlink:href="#icon-chevron-down"/>
</svg>
                        </span>
                    </span>
            </h4>
          </div>
        </div>
        <div class="js-accordion-content accordion__content   accordion__content--collapse ">
          <div class="videoWrapper">
            <!-- Copy & Pasted from YouTube -->
            <iframe width="560" height="349" :src="resource.iFrameFriendlyURL" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>

    <div v-for="resource in application.resources.public.documents.items" v-if="application.resources.public.documents.items.length" class="js-accordion  accordion accordion--eqrows" data-js="_accordion">
      <div class="js-accordion-item accordion__item question-accordion question-accordion--dark">
        <div class="js-accordion-heading accordion__eqrows-content accordion__heading--eqrows">
          <div class="accordion__eqrows-inner">
            <h4 class="accordion__heading  question-accordion question-accordion--dark">
                    <span class="chevron">
                        <span class="chevron__text">
                            {{ resource.name }}
                        </span>
                        <span class="chevron__container accordion__chevron">
                            <svg focusable="false" aria-hidden="true" class="icon  icon--small  chevron__icon">
    <use xlink:href="#icon-chevron-down"/>
</svg>
                        </span>
                    </span>
            </h4>
          </div>
        </div>
        <div class="js-accordion-content accordion__content   accordion__content--collapse ">
          <div class="videoWrapper">
            <!-- Copy & Pasted from YouTube -->
            <iframe width="560" height="349" :src="resource.iFrameFriendlyURL" frameborder="0" allowfullscreen></iframe>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Resources',
    props: [
      'application'
    ]
  }
</script>
