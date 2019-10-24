<template>
  <iframe title="vimeo-player" :src="'https://player.vimeo.com/video/' + vid" width="640" height="360" frameborder="0" allowfullscreen></iframe>
</template>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
  props:{ vid: String }
})
export default class Video extends Vue {}
</script>