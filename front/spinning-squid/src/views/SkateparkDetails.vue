<template>
  <div id="skateparkDetails" class="skateparkDetails-searchresult main-container">
    <h3 class="skateparkDetails-title">{{skatepark.title.rendered}}</h3>
    <img
      class="skateparkDetails-searchresultimage"
      :src="getImageURL"
      alt=""
    />

    <div class="skateparkDetails-description">
      <div class="skateparkDetails-adresse-etat">
        <div class="skateparkDetails-searchresulttitle">Adresse:</div>
        <div class="skateparkDetails-searchresultadress">
          {{skatepark.meta.street}}
          {{skatepark.meta.zipcode}}
          {{skatepark.meta.city}}
          </div>
        <div class="skateparkDetails-searchresulttitle">Etat général:</div>
        <div class="skateparkDetails-detailssearchresult">
          <div v-if="skatepark.meta.state === 'New'">Neuf</div>
          <div v-if="skatepark.meta.state === 'Good'">Bien</div>
          <div v-if="skatepark.meta.state === 'Way'">Moyen</div>
          <div v-if="skatepark.meta.state === 'Endoflife'">En fin de vie</div>
        </div>
      </div>
      <div class="skateparkDetails-equipement">
        <div class="skateparkDetails-searchresulttitle">Equipement:</div>
        <div class="skateparkDetails-detailssearchresult">
          <div v-if="skatepark.meta.parking === true">Parking</div>
          <div v-if="skatepark.meta.water === true">Eau</div>
          <div v-if="skatepark.meta.trashcan === true">Poubelle</div>
          <div v-if="skatepark.meta.lighting === true">Eclairage</div>
          <div v-if="skatepark.meta.table === true">Table</div>
          <div v-if="skatepark.meta.benche === true">Bancs</div>
        </div>
      </div>
    </div>

    <div class="skateparkDetails-searchresulttitle padding-bottom-2em">
      Map de l'adresse
    </div>
    <div class="skateparkDetails-search-map">
      <GmapMap :center="getPosition(skatepark)" :zoom="15" style="width: 100%; height: 100%">
        <GmapMarker
          :key="skatepark.id"
          :position="getPosition(skatepark)"
        />
  </GmapMap>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkateparkDetails",

  data() {
    return {
      skateparkID: null,
      skatepark: null,
      startLocation: { lat: 46, lng: 2 },
    };
  },

  async created() {
    //! IMPORTANT depuis la mise en place de notre router
    // les composant on acces a une "armoire" this.$router, cette dernière contient un tiroir "params" dans lequel je vais trouver la partie dynamique de mon URL
    this.skateparkID = this.$route.params.id;

     this.skatepark = await this.$store.state.services.skatepark.loadSkateParkById(this.skateparkID);
  },

  methods: {
    getPosition: function(marker) {
      return {
        lat: parseFloat(marker.meta.latitude),
        lng: parseFloat(marker.meta.longitude)
      }
    },
  },

  computed: {
    getImageURL() {
      // Vérification : le skatepark a-t-il une image
      if(this.skatepark._embedded['wp:featuredmedia']) {
          if(this.skatepark._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
              return this.skatepark._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
          }
          else if(this.skatepark._embedded['wp:featuredmedia'][0].media_details.sizes.full) {
              return this.skatepark._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
          }
          else {
              return this.skatepark._embedded['wp:featuredmedia'][0].media_details.source_url;
          }

      }
      else {
          return '../assets/images/logo-noir.png';
      }
  }
  }
};
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.skateparkDetails-searchresult {
  font-family: "Righteous";
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2em;
  color: $white;
}
.skateparkDetails-title {
  color: #fff;
  font-family: "Sedgwick Ave Display";
  font-size: 3em;
  padding: 1em;
  text-align: center;
}
.skateparkDetails-searchresultimage {
  display: block;
  width: 90vw;
  max-width: 1500px;
  object-fit: cover;
  object-position: bottom;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
}
#skateparkDetails .padding-bottom-2em {
  padding-bottom: 2em;
}
#skateparkDetails .padding-right-2rem {
  margin-right: 2rem;
}
.skateparkDetails-search-map {
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 90vw;
  max-width: 900px;
  height: 90vw;
  max-height: 900px;
  border: solid 1px;
  border-color: $orange;
  box-shadow: 0 0 40px 40px $orange inset, 0 0 0 0 $orange;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 0 $orange inset, 0 0 10px 4px $orange;
  }
}
.skateparkDetails-description {
  width: 90vw;
  max-width: 1500px;
  margin: 0 auto;
  background-color: $grey;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .skateparkDetails-adresse-etat {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .skateparkDetails-searchresulttitle {
      text-align: left;
      padding-bottom: 0.5rem;
    }
  }
  .skateparkDetails-equipement {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .skateparkDetails-detailssearchresult {
      padding-top: 1rem;
      padding-left: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      div {
        padding-bottom: 0.2rem;
      }
    }
  }
}
.skateparkDetails-searchresultadress {
}

.skateparkDetails-detailssearchresult {
  padding-bottom: 1rem;
}

.skateparkDetails-searchresulttitle {
  padding-top: 1rem;
}
.skateparkDetails-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
//etoile de rating
.rating {
  width: 226px;
  margin: 0 auto 1em;
  font-size: 45px;
  overflow: hidden;
}

.rating a {
  float: right;
  color: darkblue;
  text-decoration: none;
  -webkit-transition: color 0.4s;
  -moz-transition: color 0.4s;
  -o-transition: color 0.4s;
  transition: color 0.4s;
}

.rating label:hover ~ label,
.rating input:focus ~ label,
.rating label:hover,
.rating a:hover,
.rating a:hover ~ a,
.rating a:focus,
.rating a:focus ~ a {
  color: orange;
  cursor: pointer;
}
//loading wheel
.skateparkDetails-loading-wheel {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

@media (min-width: $largeScreen) {
  .skateparkDetails-description {
  }
}

@media (max-width: $mediumScreen) {
  .skateparkDetails-description {
    font-size: 0.75em;
    .skateparkDetails-adresse-etat {
     width: 50%;
    }
    .skateparkDetails-equipement {
      width: 50%;
    }
  }
}


</style>