<template>
  <header>
    <nav class="nav-footer">
       <router-link
          :to="{
            name: 'home',
          }"
          class="nav-footer-link"
        >
          Accueil
        </router-link>

        <router-link
          :to="{
            name: 'home',
          }"
          class="nav-footer-link"
        >
          Trouve ton Skatepark
        </router-link>

        <router-link
          :to="{
            name: 'home',
          }"
          class="nav-footer-link"
        >
          Trouve ton Matos
        </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Footer",
}
</script>


<style lang="scss">
@import "../assets/style/main.scss";

.nav-footer {
  // position: fixed;
  // float: bottom !important;
  // bottom: 0;
  background-color: $black;
  display: flex;
  justify-content: space-around;
  height: 70px;
  padding: 30px;
  width: 100%;
  margin-top: 0;

  .nav-footer-link {
    color: $grey;
    font-family: 'Righteous';
  }

  .nav-footer-link--active {
    color: $white;
  }
}

@media (max-width: $smallScreen) {
  .nav-footer .nav-footer-link {
    font-size: 0.75em;
  }
}
</style>