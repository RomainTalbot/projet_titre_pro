<template>
  <div class="main-container search">
    <h1 class="title">Trouve ton SkatePark</h1>
    <router-link
      :to="{
        name: 'skateparkAdd',
      }"
      class="nav-link menu-link"
    >
       <button class="button addSpot-button" type="button">
         Ajoute ton spot
       </button>
    </router-link>

    <form class="search-form">
      <label class="search-label">
        Où ça?
        <input
          id="town-search"
          class="search-input"
          type="text"
          name="town"
          placeholder="Paris, Lyon ..."
          required
          onChange="{props.searchFieldTown}"
        />
      </label>
      <button class="button search-button" type="submit">Rechercher</button>
    </form>

    <div class="search-result">
      <ul>
        <li v-for="skateparkItem in skateparks" :key="skateparkItem.id">
          <SkateparkCard :skateparkProps="skateparkItem" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SkateparkCard from "../components/SkateparkCard.vue";

export default {
  name: "SkateparkList",
  components: {
    SkateparkCard
  },

  async created() {

    console.log("coucou");

    this.skateparks = await this.$store.state.services.skatepark.loadSkateParks();

  },

  data() {
    return {
      skateparks: [],
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
    width: 93vw;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 1em auto 2em;
    max-width: 1500px;

    .search-map {
      height: 60vw;
      width: 60vw;
      border: solid 1px;
      border-color: $orange;
      box-shadow: 0 0 40px 40px $orange inset, 0 0 0 0 $orange;
      transition: all 150ms ease-in-out;

      &:hover {
        box-shadow: 0 0 10px 0 $orange inset, 0 0 10px 4px $orange;
      }
    }

    .search-list {
      box-sizing: border-box;
      width: 40%;
      height: auto;
      margin-right: 1em;
    }
  }
}

.search-list-item {
  padding: 1em;
  margin-bottom: 1em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $white;
}

@media (min-width: $largeScreen) {
  .search {
    .search-result {
      .search-map {
        width: 50vw;
        height: 45vw;
        margin: 0 auto;
      }
    }
  }
}

@media (max-width: 800px) {
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

@media (max-width: 400px) {
  .search {
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