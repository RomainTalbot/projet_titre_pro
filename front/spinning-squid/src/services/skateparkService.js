import axios from 'axios';

import storage from '../store/index';

const skateparkService = {

  async loadSkateParks(){

    const response = await axios.get(storage.state.routes_back.baseURI + '/skatepark?_embed=true');

    return response.data;
  },
}

export default skateparkService