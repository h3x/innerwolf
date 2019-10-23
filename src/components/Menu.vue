<template>
  <div class="menu">
    <ul>
      <li class="nav item"><a @click="clk('about')">About</a></li>
      <li class="nav item"><a @click="clk('contact')">Contact</a></li>
      <li class="nav item"><a @click="clk('facebook')">Facebook</a></li>
      <li class="nav item"><a @click="clk('work')">Work</a></li>
    </ul>
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class Menu extends Vue {

  clk(link){
    this.$emit('clicked', link);
  }
}

</script>
<style scoped>
.menu {
  width: 10%;
}
a {
    display: inline-block;
    line-height: 3em;
}

li{
  margin-top: 60px;
  font-weight: 600;
  transform: rotate(-90deg);
  -webkit-transition: 0.5s; /* For Safari 3.1 to 6.0 */
  transition: 0.5s;
  
}

li:hover{
  transition-property: all;
  transform: rotate(0);
}

ul{
  position: fixed;
  left: 0;
}

a{
  color: #515151;
}

a:hover{
  color: #CB8800;
}

</style>