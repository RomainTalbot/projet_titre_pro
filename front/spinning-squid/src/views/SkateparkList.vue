<template>
  <div class="main-container search">
    <h1 class="title">Trouve ton SkatePark</h1>
    <button class="button addSpot-button" type="button">
      <router-link
      :to="{
        name: 'skateparkAdd',
      }"
      class="nav-link menu-link"
      >
        Ajoute ton spot
      </router-link>
    </button>
    

    <form class="search-form" @submit="handleSubmitSearchSkatepark">
      <label class="search-label">
        Où ça?
        <input
          id="town-search"
          class="search-input"
          type="text"
          name="town"
          v-model="skateparkSearched"
          placeholder="Paris, Lyon ..."
          required
        />
      </label>
      <button class="button search-button" type="submit">Rechercher</button>
    </form>

    <div class="search-result">
      <div class="search-list">
        <ul >
          <li v-for="skateparkItem in skateparks" :key="skateparkItem.id">
            <SkateparkCard :skateparkProps="skateparkItem" />
          </li>
        </ul>
      </div>
      <div class="search-map">
        <SkateparkMap/>
      </div>
    </div>
  </div>
</template>

<script>
import SkateparkCard from "../components/SkateparkCard.vue";
import SkateparkMap from "../components/SkateparkMap.vue";

export default {
  name: "SkateparkList",
  components: {
    SkateparkCard,
    SkateparkMap
  },

  async created() {

    this.skateparks = await this.$store.state.services.skatepark.loadSkateParks();

    // console.log(this.skateparks);

  },

  data() {
    return {
      skateparks: [],
      skateparkSearched: "",
    }
  },

  methods: {
    handleSubmitSearchSkatepark: async function (event) {

      event.preventDefault();
      this.skateparks = [];

      this.skateparks = await this.$store.state.services.skatepark.loadSkateParksByCity(this.skateparkSearched);

      // console.log(this.skateparks);
    }
  },
};
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.search {
  height: auto;
  max-width: 100%;
  font-family: "Righteous";

  .iconeMarker {
    height: 25px;
    width: 25px;
    font-size: 2rem;
  }

  .addSpot-button {
    display: flex;
    justify-content: flex-end;
    margin-right: 2em;
    font-size: 1rem;
    width: 120px;
    height: 50px;
  }

  .search-form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 80px;
    max-width: 800px;
    color: $white;

    .search-input {
      font-size: 1.1rem;
      margin: 0 2em 0 0.5em;
    }

    .search-button {
      height: 30px;
      width: 130px;
      margin: 0;
    }
  }

  .search-result {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1em auto 2em;
    max-width: 1500px;

    .search-list {
      width: 40%;
      height: auto;
      margin-right: 1em;
    }

    .search-map {
      height: 45vw;
      width: 50vw;
      max-height: 850px;
      max-width: 850px;
      margin: 0 auto;
      border: solid 1px;
      border-color: $orange;
      box-shadow: 0 0 40px 40px $orange inset, 0 0 0 0 $orange;
      transition: all 150ms ease-in-out;
    }
  }
}

@media (max-width: $mediumScreen + 400px) {
  .search {
    .search-result {
      flex-direction: column-reverse;

      .search-map {
        width: 90vw;
        height: 90vw;
        margin: 0 auto;
      }
      .search-list {
        width: 90vw;
        margin: 0 auto;
        padding-top: 2rem;
      }
    }
  }
}

@media (max-width: $smallScreen) {
  .search {
    .addSpot-button {
      justify-content: center;
      margin: 0 auto;
    }
    .search-form {
      flex-direction: column;

      .search-input {
        margin: 1em 0;
      }
    }
    .search-result {
      .search-list {
        .search-list-item {
          .block-titre-type {
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>