const tokenService = {

  // Méthode enregistrant une nouvelle entrée dans LocalStorage
  set: function (username, informations) {

    // je transforme ma variable en JSON
    const JSONInformationsObject = JSON.stringify(informations);

    // pour par la suite l'enregistrer coté localstorage
    localStorage.setItem(username, JSONInformationsObject);
  },

  // Méthode récupérant une entrée contenue dans LocalStorage
  get: function (username) {

    // je récupère la chaîne de caractère JSON contenu dans LocalStorage
    const JSONInformationsObject = localStorage.getItem(username);

    // et je la transforme en objet JS
    const informationsObject = JSON.parse(JSONInformationsObject);
    return informationsObject;
  },

  // Méthode supprimant une entrée contenue dans LocalStorage
  unset: function (username) {

    // Je cible l'entrée à supprimer 
    localStorage.removeItem(username);
  }

};

export default tokenService;