<template>
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
</template>

<script>
export default {
  name: "Footer",
}
</script>


<style lang="scss">
@import "../assets/style/main.scss";

.nav-footer {
  background-color: $black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  margin-top: 0;

  .nav-footer-link {
    color: $grey;
    font-family: 'Righteous';
  }

  .nav-footer-link:hover {
      color: $orange;
      transition: 1s;
  }

  .nav-footer-link--active {
    color: $white;
    border-bottom: $orange solid 1px;
  }
}
@media (max-width: $smallScreen) {
  .nav-footer .nav-footer-link {
    font-size: 0.75em;
  }
}
@media (min-width: $largeScreen) {
  .nav-footer {
    width: 1500px;
    margin: 0 auto;
  }
}
</style>