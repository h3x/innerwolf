<template>
  <div class="header">
    <img src='../assets/logo.jpg' class='logo clearfix'>
    <div class="words has-text-left">
    Inner <br />
    Wolf <br />
    Productions
    </div>
    <hr />
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

@Component
export default class Header extends Vue {}

</script>
<style scoped>
.header {
  
}

.logo{
  margin:10px;
  float: left;
  width: 50px;
  border-radius: 50%;
}

.words{
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
}

hr {
  width: 80%;
  margin: auto;
  border: 1px solid #515151;
}

</style>