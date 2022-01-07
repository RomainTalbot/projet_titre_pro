import axios from 'axios';

import storage from '../store/index';

const userService = {

  // Créer un nouvel utilisateur
  async saveNewUser(username, lastname, firstname, street, zipcode, city, email, password){

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

  // Méthode permettant de se connecter
  login: async function (username, password) {

    const response = await axios.post(storage.state.routes_back.baseUser + '/token', 
    {
      username: username,
      password: password
    }).catch(
      function () {
        return false;
      }
    );

    return response.data;
  },
}

export default userService