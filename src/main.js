import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import vuetify from './plugins/vuetify';
import './api/axios';
import { get, post, postform } from './api/utils';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper),
Vue.prototype.$axios = axios,
Vue.prototype.$get = get,
Vue.prototype.$post = post,
Vue.prototype.$postform = postform,
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  // mounted() {
  //   document.dispatchEvent(new Event('render-event'));
  // }
}).$mount("#app");
