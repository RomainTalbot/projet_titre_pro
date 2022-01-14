import axios from 'axios';

import storage from '../store/index';

const userService = {

  // Créer un nouvel utilisateur
  async saveNewUser(username, lastname, firstname, street, zipcode, city, email, password) {

    const result = await axios.post(
      storage.state.routes_back.baseSpinningSquid + '/newuser-save',
      {
        username: username,
        lastname: lastname,
        firstname: firstname,
        street: street,
        zipcode: zipcode,
        city: city,
        email: email,
        password: password
      }
    );

    return result;
  },

  // Méthode pour éditer son profil
  async updateUser (username, lastname, firstname, street, zipcode, city, email, password) {

    const result = await axios.post(
      storage.state.routes_back.baseSpinningSquid + '/user-edit',
      {
        username: username,
        lastname: lastname,
        firstname: firstname,
        street: street,
        zipcode: zipcode,
        city: city,
        email: email,
        password: password
      }
    );

    return result;
  },

  // Méthode permettant de se connecter
  async login(username, password) {

    const response = await axios.post(storage.state.routes_back.baseUser + '/token', 
    {
      username: username,
      password: password
    }).catch(
      function () {
        return false;
      }
    );

    storage.state.user = true;

    return response.data;
  },

  // Méthode permettant de savoir si l'utilisateur est connecté
  async isConnected () {

    const userData = storage.state.services.token.get('userData');

    if (userData != null) {

      const token = userData.token;

      if (token) {

        const options = {
          headers: {
            Authorization: 'Bearer ' + token
          }
        };

        const response = await axios.post(
          storage.state.routes_back.baseUser + '/token/validate', 
          null, 
          options)

        return response.data;
      }
    } else {
      return false;
    }
  },

  // Méthode pour se déconnecter
  logout () {

    storage.state.services.token.unset('userData');

    storage.state.user = false;
  },

  // Méthode pour supprimer son compte
  async deleteUser(id) {

    const userData = storage.state.services.token.get('userData');

    if (userData != null) {

      const token = userData.token;

      if (token) {

        const options = {
          headers: {
            Authorization: 'Bearer ' + token
          }
        };

        const response = await axios.post( 
          storage.state.routes_back.baseSpinningSquid + '/user-delete',
          { 
            id: id,
          }, 
          options
        );
        
        return response;
      }
    }
  },

  // Méthode permettant de récupérer toutes informations de l'utilisateur
  async loadUserDataByUsername(){

    // Je récupère le username stockés dans le token du LocalStorage
    const username = storage.state.services.token.get('userData').user_display_name;

    const response = await axios.get(storage.state.routes_back.baseURI + '/users?slug=' + username);

    return response.data;
  },

  // Méthode permettant de récupérer l'avatar de l'utilisataeur 
  async loadUserAvatarByMediaId(id) {

    const response = await axios.get(storage.state.routes_back.baseURI + '/media/' + id);
    
    return response.data;
  },

  // Méthode permettant de récupérer tous les skateparks postés par l'utilisateur
  async loadUserSkateparks(id) {

    const response = await axios.get(storage.state.routes_back.baseURI + '/skatepark?author=' + id);

    return response.data;
  }
}

export default userService