import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import * as VueGoogleMaps from 'vue2-google-maps'

export const bus = new Vue();

//Import d'une feuille de style global
import './assets/style/main.scss';

Vue.config.productionTip = false

// Nécessaire à l'utilisation de google maps
// https://www.digitalocean.com/community/tutorials/vuejs-vue-google-maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAglZjyBm532ApJYhxUDEVnmIo0Zd_JsjY',
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
