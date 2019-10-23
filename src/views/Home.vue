<template>
  <div class="home">
    <Header />
    <Menu class="menu" @clicked="onChildClick" />
    <div class='about' v-if="info=='about'">Professional, Creative Music Videos <br />Live and On Location</div>

    <div class='contact has-text-left' v-if="info=='contact'">jeffrichie@gmail.com <br /> facebook.com/innerwolf <br /> 0403235544 </div>

    <div class='facebook' v-if="info=='facebook'">My name is jeff</div>

    <div class='work' v-if="info=='work'">Vimeo API</div>
    
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";

@Component({
  components: {
    Header,
    Menu,
  }
})
export default class Home extends Vue {
  info = 'about';

  onChildClick(evt){
    this.info = evt;
  }
}

</script>
<style scoped>
.about{
  margin: 50px;
  transition-delay: 1000;
  
}

.contact{
  margin: 50px;
  margin-left: 300px;
}


</style>