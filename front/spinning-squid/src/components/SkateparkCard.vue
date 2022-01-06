<template lang="pug">
  <div class="search-list-item">
  //- <img class="search-list-image" :src="#" alt="" />
  <div class="block-titre-type">
    <div>
      <h2 class="search-list-title">{{ skateparkProps.title.rendered }}</h2>
    </div>
    <div>
      <h3 class="search-list-description" v-if="skateparkProps.meta.skatepark === true">SkatePark</h3>
      <h3 class="search-list-description" v-else-if="skateparkProps.meta.pumptrack === true">Pumptrack</h3>
      <h3 class="search-list-description" v-else="skateparkProps.meta.streetspot === true">Street</h3>
    </div>
  </div>
  <div class="block-buttons">
    <div id="special-button">
      <button class="button" type="button">Centrer</button>
      <button class="button" type="button">Détails</button>
    </div>
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

  }
};
</script>

<style lang="scss">
@import "../assets/style/main.scss";
.search-list-item {
  padding: 1em;
  margin-bottom: 1em;
  width: 100%;
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
    word-break: break-all;
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
    #special-button {
      padding-bottom: 0.5rem;
    }
  }
}
</style>