<template>
  <div class="search-list-item">
  <img class="search-list-image" :src="getImageURL" alt="" />
  <div class="block-titre-type">
    <div>
      <h2 class="search-list-title">{{ skateparkProps.title.rendered }}</h2>
    </div>
    <div>
      <h3 class="search-list-description" v-if="skateparkProps.meta.skatepark === true">SkatePark</h3>
      <h3 class="search-list-description" v-else-if="skateparkProps.meta.pumptrack === true">Pumptrack</h3>
      <h3 class="search-list-description" v-else>Street</h3>
    </div>
  </div>
  <div class="block-buttons">
    <button class="button" type="button">Centrer</button>
    <button class="button" type="button">Détails</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "SkateparkCard",

  data() {
    return {
    };
  },

  props: {
    // On précise que la props skateparkProps sera de type "Object"
    skateparkProps: Object,
  },
  methods: {

  },
  computed: {
    getImageURL() {
      // Vérification : le skatepark a-t-il une image
      if(this.skateparkProps._embedded['wp:featuredmedia']) {
          if(this.skateparkProps._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
              return this.skateparkProps._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
          }
          else if(this.skateparkProps._embedded['wp:featuredmedia'][0].media_details.sizes.full) {
              return this.skateparkProps._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
          }
          else {
              return this.skateparkProps._embedded['wp:featuredmedia'][0].media_details.source_url;
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

.search-list-item {
  padding: 1em;
  margin-bottom: 1em;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $white;

  .search-list-image {
    border: solid 1px;
    height: 80px;
    width: 80px;
    margin-right: 1em;
  }
  .search-list-title {
    white-space: pre-line;
    word-break: break-word;
  }
  .block-titre-type {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .search-list-description {
    font-size: 0.8em;
    padding-left: 0.8rem;
  }
  .block-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
      margin-bottom: 0.5rem;
    }
  }
}
</style>