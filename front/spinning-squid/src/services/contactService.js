import axios from 'axios';

import storage from '../store/index';

const contactService = {


  async sendUsEmail(subject, email, message) {

    const response = await axios.post(storage.state.routes_back.baseSpinningSquid + '/send-email',
    {
      subject: subject,
      email: email,
      message: message,
    });

    return response;
  }
}

export default contactService