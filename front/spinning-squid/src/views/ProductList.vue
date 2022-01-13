<template>
  <div>
    <h1 class="title">Désolé mais je n'ai pas fini cette page</h1>
    <p class="subtitle">Repasse plus tard</p>

    <button class="button" @click="verification">TEST</button>
  </div>
</template>

<script>
export default {
  name: 'ProductList',

  methods: {
    verification: async function() {
      console.log(this.$store.state.services.user.isConnected());
    }
  }
}
</script>

<style lang="scss">
@import "../assets/style/main.scss";

  .subtitle{
    font-family: "Righteous";
    color: $orange;
    text-align: center;
    margin: 2em;
    font-size: 1.3em;
  }
</style>