<template>
  <div class="spotadd-container">
    <h2 class="title">Ajoute ton Spot</h2>

    <SkateparkForm />
  </div>
</template>

<script>
import SkateparkForm from "../components/SkateparkForm.vue";
export default {
  name: "SkateparkAdd",
  components: {
    SkateparkForm,
  },
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
}

@media (max-width: $smallScreen) {
  .spotadd-container {
    .spotadd-title {
      margin: 0.7em 0;
      font-size: 1.5em;
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
    .spotadd-title {
      margin: 1em 0;
      font-size: 2em;
    }
  }
}
</style>