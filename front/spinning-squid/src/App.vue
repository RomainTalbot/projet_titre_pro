<template>
  <div id="app">
    <Header/>

    <main class="main-container">
      <router-view/>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },

  async created() {

    const isMyTokenValide = await this.$store.state.services.user.isConnected();

    if (!isMyTokenValide) {
      this.$store.state.user = false;
    } else {
      this.$store.state.user = true;
    }
  }
};
</script>

<style lang="scss">

body {
  margin: 0;
}
#app {
  background: radial-gradient(ellipse at top, #242424 0%, #000000 80%);
  min-height: 100vh;
  max-height: auto;
  position: relative;
}
</style>
