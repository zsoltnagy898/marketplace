<template>
  <div id="video-dialog" :class="{ 'dialog--display': isModalOpen}" class="confirmation-dialog js-dialog dialog dialog--interstitial js-dialog-display dialog--scrollable">
    <div class="spring dialog__close-spring">
      <a v-on:click="isModalOpen = false" id="close-dialog" href="#" class="js-dialog-close dialog__close " style="display: inline-block;">
        <svg focusable="false" aria-hidden="true" class="icon  icon--small  dialog__icon">
          <use xlink:href="#icon-close"></use>
        </svg>

        <span class="visually-hidden">Close dialog</span>
      </a>
    </div>
    <div class="js-dialog-content dialog__content" style="display: block;"><div id="ajax" class="ajax">
      <div class="spring spring--md">
        <div class="section flush--top align--center">
          <div class="iframe-container">
            <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + videoId" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div></div>
  </div>
</template>

<script>
  import { bus } from "../../main";
  import getVideoId from 'get-video-id';


  export default {
    name: 'Modal',
    data() {
      return {
        videoId: '',
        isModalOpen: false
      }
    },
    props: [
      'application'
    ],
    mounted() {
      bus.$on('toggle-modal', modalOpen => {
        this.isModalOpen = modalOpen;
      });
      this.videoId = getVideoId(this.application.overview.callToActions.demo.href).id;
    }
  }
</script>
