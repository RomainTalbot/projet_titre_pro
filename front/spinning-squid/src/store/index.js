import Vue from 'vue';
import Vuex from 'vuex';

import skateparkService from "../services/skateparkService.js";

Vue.use(Vuex)

export default new Vuex.Store({

  // On stocke les données partageables avec les composants
  state: {
    user: null,

    services: {
      skatepark: skateparkService,
    },

    routes_back: {
      baseURI: 'http://localhost/projet_titre_pro/back/public/index.php/wp-json/wp/v2',
      baseSpinningSquid: 'http://localhost/projet_titre_pro/back/public/index.php/wp-json/spinning_squid/v1',
    }
  },

  // "setters" pour modifier le state du store
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
