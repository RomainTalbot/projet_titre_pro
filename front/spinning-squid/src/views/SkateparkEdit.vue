<template>
  <div class="spotadd-container">
    <h2 class="title">Modifie ton Spot</h2>

    <AlertMessage
      v-if="alert"
      :alertMessageProps="alertMessage"
    />

    <button class="button delete-button" type="button" @click="deleteSpot">
      Supprime ton spot
    </button>

    <form class="spotadd-form" @submit="handleSubmit">
      <div class="spotadd-form-container">
        <div class="spotadd-container-title-type">
          <div class="_title">
            <h2 class="spotadd-title">Titre</h2>
            <input
              id="titleSkatepark"
              class="spotadd-input-title"
              type="text"
              v-model="title"
              placeholder="SkatePark de Grenoble Centre"
            />
          </div>
          <div class="spotadd-container-category">
            <div>
              <label class="spotadd-label-category">
                SkatePark
                <input
                  id="categorySkatepark"
                  class="spotadd-check-category cursor-pointer"
                  type="radio"
                  value="Skatepark"
                  v-model="typeSpot"
                />
              </label>
            </div>

            <div>
              <label class="spotadd-label-category">
                PumpTrack
                <input
                  id="categoryPumptrack"
                  class="spotadd-check-category cursor-pointer"
                  type="radio"
                  value="Pumptrack"
                  v-model="typeSpot"
                />
              </label>
            </div>

            <div>
              <label class="spotadd-label-category">
                Street
                <input
                  id="categoryStreet"
                  class="spotadd-check-category cursor-pointer"
                  type="radio"
                  value="Streetspot"
                  v-model="typeSpot"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="spotadd-container-informations">
          <div class="spotadd-container-information-adress-image">
            <div class="spotadd-container-adress">
              <h2 class="spotadd-title">Adresse</h2>
              <input
                id="addSpotStreet"
                class="spotadd-input"
                type="text"
                v-model="street"
                placeholder="Rue"
                required
              />
              <input
                id="addSpotPostal"
                class="spotadd-input"
                type="text"
                v-model="zipcode"
                placeholder="Code Postal"
                required
              />
              <input
                id="addSpotTown"
                class="spotadd-input"
                type="text"
                v-model="city"
                placeholder="Ville"
                required
              />
              <input
                id="addSpotlongitude"
                class="spotadd-input"
                type="number"
                step="0.00001"
                v-model="longitude"
                placeholder="longitude"
                required
              />
              <input
                id="addSpotlatitude"
                class="spotadd-input"
                type="number"
                step="0.00001"
                v-model="latitude"
                placeholder="latitude"
                required
              />
            </div>
            <div class="spotadd-container-image">
              <h2 class="spotadd-title">Image</h2>
              <input
                id="uploadImage"
                class="add-image"
                type="file"
                name="image"
                accept="image/png, image/jpeg, image/jpg"
                multiple
                hidden
                @change='convertImage'
              />
            </div>
          </div>
          <div class="spotadd-container-equipment-state">
            <div class="spotadd-container-equipment">
              <h2 class="spotadd-title">Equipement</h2>
              <label class="spotadd-label-equipment">
                Parking
                <input
                  id="parking"
                  class="spotadd-check-equipment cursor-pointer"
                  type="checkbox"
                  v-model="parking"
                />
              </label>

              <label class="spotadd-label-equipment">
                Eau potable
                <input
                  id="water"
                  class="spotadd-check-equipment cursor-pointer"
                  type="checkbox"
                  v-model="water"
                />
              </label>

              <label class="spotadd-label-equipment">
                Poubelle
                <input
                  id="trashcan"
                  class="spotadd-check-equipment cursor-pointer"
                  type="checkbox"
                  v-model="trashcan"
                />
              </label>

              <label class="spotadd-label-equipment">
                Eclairage
                <input
                  id="lighting"
                  class="spotadd-check-equipment cursor-pointer"
                  type="checkbox"
                  v-model="lighting"
                />
              </label>

              <label class="spotadd-label-equipment">
                Table
                <input
                  id="table"
                  class="spotadd-check-equipment cursor-pointer"
                  type="checkbox"
                  v-model="table"
                />
              </label>

              <label class="spotadd-label-equipment">
                Banc
                <input
                  id="benche"
                  class="spotadd-check-equipment cursor-pointer"
                  type="checkbox"
                  v-model="benche"
                />
              </label>
            </div>

            <div class="spotadd-container-state">
              <h2 class="spotadd-title">Etat</h2>
              <div>
                <label class="spotadd-label-state">
                  Neuf
                  <input
                    id="addSpotNew"
                    class="spotadd-radio cursor-pointer"
                    type="radio"
                    value="New"
                    v-model="state"
                  />
                </label>
              </div>
              <div>
                <label class="spotadd-label-state">
                  Bien
                  <input
                    id="addSpotGood"
                    class="spotadd-radio cursor-pointer"
                    type="radio"
                    value="Good"
                    v-model="state"
                  />
                </label>
              </div>
              <div>
                <label class="spotadd-label-state">
                  Moyen
                  <input
                    id="addSpotWay"
                    class="spotadd-radio cursor-pointer"
                    type="radio"
                    value="Way"
                    v-model="state"
                  />
                </label>
              </div>
              <div>
                <label class="spotadd-label-state">
                  En fin de vie
                  <input
                    id="addSpotEndoflife"
                    class="spotadd-radio cursor-pointer"
                    type="radio"
                    value="Endoflife"
                    v-model="state"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="button spotadd-button">Valider</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SkateparkForm",

  data() {
    return {
      skateparkID: null,
      skateparkData: null,

      title: "",
      typeSpot: "",
      street: "",
      zipcode: "",
      city: "",
      latitude: "",
      longitude: "",
      parking: "",
      water: "",
      trashcan: "",
      lighting: "",
      table: "",
      benche: "",
      state: "",
      image: "",

      skatepark: "",
      pumptrack: "",
      streetspot: "",

      alert: false,
      alertMessage:  ""
    }
  },

  async created() {

    this.skateparkID = this.$route.params.id;

    this.skateparkData = await this.$store.state.services.skatepark.loadSkateParkById(this.skateparkID);

    // Je charge les valeurs du Skatepark
    this.title = this.skateparkData.title.rendered;
    if (this.skateparkData.meta.skatepark) {
      this.typeSpot = 'Skatepark'
    } else if (this.skateparkData.meta.pumptrack) {
      this.typeSpot = 'Pumptrack'
    } else {
      this.typeSpot = 'Streetspot'
    }
    this.street = this.skateparkData.meta.street;
    this.zipcode = this.skateparkData.meta.zipcode;
    this.city = this.skateparkData.meta.city;
    this.latitude = this.skateparkData.meta.latitude;
    this.longitude = this.skateparkData.meta.longitude;
    this.parking = this.skateparkData.meta.parking;
    this.water = this.skateparkData.meta.water;
    this.trashcan = this.skateparkData.meta.trashcan;
    this.lighting = this.skateparkData.meta.lighting;
    this.table = this.skateparkData.meta.table;
    this.benche = this.skateparkData.meta.benche;
    this.state = this.skateparkData.meta.state
  },

  methods: {
    handleSubmit: async function (event) {
      event.preventDefault();

      // Conditions minimales pour créer un post
      if (
        this.title != "" &&
        this.street != "" &&
        this.zipcode != "" &&
        this.city != "" &&
        this.latitude != "" &&
        this.longitude != ""
      ) {
        // Adapater les checkbox et radio button au format de ma bdd
        if (this.typeSpot == 'Skatepark') {
          this.skatepark = true
        } else {
          this.skatepark = false
        }
        if (this.typeSpot == 'Pumptrack') {
          this.pumptrack = true
        } else {
          this.pumptrack = false
        }
        if (this.typeSpot == 'Streetspot') {
          this.streetspot = true
        } else {
          this.streetspot = false
        }
        if (this.parking != "") {
          this.parking = true;
        }
        if (this.water != "") {
          this.water = true;
        }
        if (this.trashcan != "") {
          this.trashcan = true;
        }
        if (this.lighting != "") {
          this.lighting = true;
        }
        if (this.table != "") {
          this.table = true;
        }
        if (this.bench != "") {
          this.bench = true;
        }

        if (this.$store.state.image != '') {
          this.image = this.$store.state.image;
        }

        const result = await this.$store.state.services.skatepark.editSpot(
          this.skateparkID,
          this.title,
          this.skatepark,
          this.pumptrack,
          this.streetspot,
          this.street,
          this.zipcode,
          this.city,
          this.latitude,
          this.longitude,
          this.parking,
          this.water,
          this.trashcan,
          this.lighting,
          this.table,
          this.benche,
          this.state,
          this.image
        );

        if (result.data.succes == true) {
          this.alert = false;
          window.alert('Ton spot a bien été modifié !');
          this.$router.push({name: 'userHome'});
        } else if (result.data.succes == true && result.data.image == 'unvalid image' ){
          this.alert = false;
          window.alert(
            `
            Ton spot a bien été modifié !
            ATTENTION : ton image n'est pas au bon format ! (formats valides : jpg, jpeg, png)
            Tu peux modifier ton post sur ton Espace Utilisateur
            `
          );
          this.$router.push({name: 'skateparkList'});
        } else if (result.data.succes == 'not allowed') {
          this.alert = true;
          this.alertMessage = "Tu n'es pas autorisé à modifier ce spot ! Vilain !";
        }
        else if (result.data.succes == false) {
          this.alert = true;
          this.alertMessage = "Ton spot n'a pas été modifié. Vérifie tous les champs";
        } else if (result.data.succes == false && result.data.informations == 'user is not connected') {
          this.alert = true;
          this.alertMessage = "Ton spot n'a pas éta modifié. Connecte toi d'abord";
        }
    } else {
      this.alert = true;
      this.alertMessage = "Ton spot n'a pas été ajouté. Vérifie tous les champs";
      console.log(this.alertMessage);
    }
    },

    deleteSpot: async function () {

      const result = await this.$store.state.services.skatepark.deleteSpot(
        this.skateparkID,
      );

      if (result.data.succes == 'not allowed') {
        this.alert = true;
        this.alertMessage = "Tu n'es pas autorisé à supprimer ce spot ! Vilain !";
      } else if (result.data.succes == false && result.data.informations == 'user is not connected') {
        this.alert = true;
        this.alertMessage = "Ton spot n'a pas été ajouté. Connecte toi d'abord";
      } else if (result.data.succes == true) {
        this.alert = false;
        window.alert('Ton spot a bien été supprimé')
        this.$router.push({name: 'userHome'});
      }
    },

    convertImage: function() {

      const image = document.querySelector('#uploadImage')['files'][0];
      this.$store.state.services.image.convertBase64(image);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.spotadd-container {
  color: $white;
  font-family: "Righteous";

  .spotadd-title {
    margin: 0;
    font-size: 1.5em;
    text-align: center;
    color: $orange;
  }

  .delete-button {
    display: flex;
    justify-content: flex-end;
    margin-right: 2em;
    font-size: 1rem;
    width: 120px;
    height: 50px;
  }

  .spotadd-form {
    margin-bottom: 1em;

    .spotadd-form-container {
      display: flex;
      flex-direction: column;
      .spotadd-container-title-type {
        text-align: center;
        #titleSkatepark {
          width: 98%;
          max-width: 700px;
        }
        .spotadd-container-category {
          margin-top: 1rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          div {
            margin-right: 1rem;
          }
        }
      }
      .spotadd-container-informations {
        display: flex;
        flex-direction: column;
        .spotadd-container-information-adress-image {
          width: 100%;
          .spotadd-container-adress {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .spotadd-container-adress {
            & input {
              width: 98%;
              max-width: 700px;
            }
          }
          .spotadd-container-image {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
        .spotadd-container-equipment-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          .spotadd-container-equipment {
            padding: 1em 0;
            .spotadd-label-equipment {
              display: flex;
              flex-direction: row-reverse;
              align-items: center;
              justify-content: flex-end;
              padding: 0.2em 0 0.2em 2em;
            }
          }
          .spotadd-container-state {
            padding: 1em 0 2em;
            .spotadd-label-state {
              display: flex;
              flex-direction: row-reverse;
              align-items: center;
              justify-content: flex-end;
              padding: 0.2em 0 0.2em 2em;
            }
          }
        }
      }
    }
  }
}

@media (max-width: $smallScreen) {
  .spotadd-container {
    .spotadd-title {
      margin: 0.7em 0;
      font-size: 1.5em;
    }
    .delete-button {
      justify-content: center;
      margin: 0 auto;
    }
  }
}
@media (max-width: $mediumScreen) {
  .spotadd-container {
    .spotadd-title {
      margin: 0.8em 0;
      font-size: 2em;
    }
  }
}
@media (min-width: $mediumScreen) {
  .spotadd-container {
    .spotadd-form {
      .spotadd-form-container {
        .spotadd-title {
          margin: 1em 0;
          font-size: 2em;
        }
        .spotadd-container-title-type {
          #titleSkatepark {
            margin-top: 1em;
            max-width: 700px;
          }
          .spotadd-container-category {
            margin-top: 1rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            div {
              margin-right: 1rem;
            }
          }
        }
        .spotadd-container-informations {
          display: flex;
          flex-direction: row;
          justify-content: center;
          .spotadd-container-information-adress-image {
            width: 700px;
            padding-right: 5em;
            .spotadd-container-adress {
              & input {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>