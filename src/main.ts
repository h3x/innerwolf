import Vue from "vue";
import VueMq from 'vue-mq';
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// media query break points
Vue.use(VueMq, {
  breakpoints: {
    phone: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
