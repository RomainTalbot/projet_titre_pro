import axios from 'axios';

import storage from '../store/index';

const skateparkService = {

  // Charge tous les skateparks et leurs informations
  async loadSkateParks(){

    const response = await axios.get(storage.state.routes_back.baseURI + '/skatepark?_embed=true');

    return response.data;
  },

   // Charge un skatepark et ses informations en focntion de son ID
   async loadSkateParkById(ID){

    const response = await axios.get(storage.state.routes_back.baseURI + '/skatepark/' + ID + '?_embed=true');

    return response.data;
  },

  // Charge un skatepark et ses informations en focntion de son ID
  async loadSkateParksByCity(city){

    const response = await axios.get(storage.state.routes_back.baseURI + '/skatepark/?_embed=true&meta_key=city&meta_value=' + city);

    return response.data;
  },

  async addSpot(title, skatepark, pumptrack, streetspot, street, zipcode, city, latitude, longitude, parking, water, trashcan, lighting, table, benche, state, image){
   
    const userData = storage.state.services.token.get('userData');

    if (userData != null) {
      const token = userData.token;

      if(token){
        const options = {
          headers: {
            Authorization:
              'Bearer ' + token,
          },
        }

        console.log(options);

        const result = await axios.post(
          storage.state.routes_back.baseSpinningSquid + '/newskatepark-save',
          {
            title: title,
            skatepark: skatepark,
            pumptrack: pumptrack,
            streetspot: streetspot,
            street: street,
            zipcode: zipcode,
            city: city,
            latitude: latitude,
            longitude: longitude,
            parking: parking,
            water: water,
            trashcan: trashcan,
            lighting: lighting,
            table: table,
            benche: benche,
            state: state,
            image: image,
          },
          options
        );

        return result;
      }
    }
  },

  async editSpot(id, title, skatepark, pumptrack, streetspot, street, zipcode, city, latitude, longitude, parking, water, trashcan, lighting, table, benche, state, image){
   
    const userData = storage.state.services.token.get('userData');

    if (userData != null) {
      const token = userData.token;

      if(token){
        const options = {
          headers: {
            Authorization:
              'Bearer ' + token,
          },
        }

        console.log(options);

        const result = await axios.post(
          storage.state.routes_back.baseSpinningSquid + '/skatepark-edit',
          {
            id: id,
            title: title,
            skatepark: skatepark,
            pumptrack: pumptrack,
            streetspot: streetspot,
            street: street,
            zipcode: zipcode,
            city: city,
            latitude: latitude,
            longitude: longitude,
            parking: parking,
            water: water,
            trashcan: trashcan,
            lighting: lighting,
            table: table,
            benche: benche,
            state: state,
            image: image,
          },
          options
        );

        return result;
      }
    }
  },

  async deleteSpot(id) {

    const userData = storage.state.services.token.get('userData');

    if (userData != null) {
      const token = userData.token;

      if(token){
        const options = {
          headers: {
            Authorization:
              'Bearer ' + token,
          },
        }

        console.log(options);

        const result = await axios.post(
          storage.state.routes_back.baseSpinningSquid + '/skatepark-delete',
          {
            id: id
          },
          options
        );

        return result;
      }
    }
  }
}

export default skateparkService