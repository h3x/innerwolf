<template>
  <div class="home">
    <Header />
    
    <Menu class="menu" @clicked="onChildClick" />
    <div class='about' v-if="info=='about'">Professional, Creative Music Videos <br />Live and On Location</div>
    <div class='contact has-text-left' v-if="info=='contact'">jeffrichie@gmail.com <br /> facebook.com/innerwolf <br /> 0403235544 </div>
    <div class='facebook' v-if="info=='facebook'">My name is jeff</div>

    <div class='work' v-if="info=='work'">
      <div class="modal" v-bind:class="{'is-active' : modal}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <Vimeo  />
        </div>
        <button class="modal-close is-large" aria-label="close" @click='closeModal'></button>
      </div>
    </div>
    
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Vimeo from "@/components/Vimeo.vue";

@Component({
  components: {
    Header,
    Menu,
    Vimeo,
  }
})
export default class Home extends Vue {
  info = 'about';
  modal = false;

  onChildClick(evt){
    this.info = evt;
    this.modal = this.info == 'work' ? true : false;
  }

  closeModal(){
    this.modal = false;
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

.modal-content {
  width: 90%;
}

</style>