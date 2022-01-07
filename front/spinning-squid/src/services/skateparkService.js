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
}

export default skateparkService