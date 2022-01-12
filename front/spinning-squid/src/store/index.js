import Vue from 'vue';
import Vuex from 'vuex';

import skateparkService from "../services/skateparkService.js";
import userService from "../services/userService.js";
import tokenService from "../services/tokenService.js";

Vue.use(Vuex)

export default new Vuex.Store({

  // On stocke les données partageables avec les composants
  state: {
    user: null,

    services: {
      skatepark: skateparkService,
      user: userService,
      token: tokenService,
    },

    routes_back: {
      baseURI: 'http://localhost/projet_titre_pro/back/public/index.php/wp-json/wp/v2',
      baseSpinningSquid: 'http://localhost/projet_titre_pro/back/public/index.php/wp-json/spinning_squid/v1',
      baseUser: 'http://localhost/projet_titre_pro/back/public/index.php/wp-json/jwt-auth/v1'
    }
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
