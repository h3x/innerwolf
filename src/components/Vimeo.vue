<template>
  <div class="vimeo">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent" v-for="(video, index) in videos" v-bind:key="index">
              <Video class="tile video is-child" :vid="video"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Component from 'vue-class-component';
import Vue from 'vue';
import Video from '@/components/Video';
import * as raw from '../../videos';


@Component({
  components:{
    Video,
  }
})
export default class Vimeo extends Vue {
  videos = raw.videos;
  mounted(){
    console.log(raw.videos)
  }
  
}

</script>

<style scoped>

.video {
  margin: 50px;

}
</style>