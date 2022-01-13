<template>
  <div class="notFound main-container">
    <div class="notFound-container">
      <h1 class="title">Oops ... t'as loupé ton back flip ?</h1>
      <p class="notFound-p">Ceci est une erreur 404, la page demandée n'héxiste pas.</p>
      <router-link
        :to="{
          name: 'home',
        }"
      >
        <button class="button button-back" type="button">Retour à l'accueil</button>
      </router-link>
      <img class="notFound-image" alt="" src='../assets/images/logo404.png' />
    </div>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.notFound {
  font-family: "Righteous";

  .notFound-container {
    margin: auto;
    max-width: 800px;
    color: $white;

    .notFound-image {
      display: flex;
      margin: auto;
      width: 800px;
      height: auto;
    }

    .notFound-p {
      text-align: center;
      margin: 2em;
      font-size: 1.3em;
    }
  }
}

@media (max-width: $smallScreen) {
  .notFound {
    .notFound-container {
      .notFound-image {
        width: 300px;
        height: auto;
      }
    }
  }
}

@media (min-width: $smallScreen +1) and (max-width: $mediumScreen) {
  .notFound {
    .notFound-container {
      .notFound-image {
        width: 400px;
        height: auto;
      }
    }
  }
}
</style>