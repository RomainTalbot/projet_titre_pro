import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import * as VueGoogleMaps from 'vue2-google-maps'

//Import general style sheet
import './assets/style/main.scss';

Vue.config.productionTip = false

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
