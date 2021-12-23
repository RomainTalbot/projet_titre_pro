<template>
  <header>
    <nav class="nav">
      <div class="nav-logo-header">
        <router-link
          :to="{
            name: 'home',
          }"
        >
          <img
            class="nav-logo"
            src="../assets/images/logo1.png"
            alt="logo spinning squid"
          />
        </router-link>
      </div>

      <div class="nav-desktop">
        <router-link
          :to="{
            name: 'home',
          }"
          exact
          class="nav-link"
        >
          Accueil
        </router-link>

        <router-link
          :to="{
            name: 'home',
          }"
          exact
          class="nav-link"
        >
          Trouve ton Skatepark
        </router-link>

        <router-link
          :to="{
            name: 'home',
          }"
          exact
          class="nav-link"
        >
          Trouve ton Matos
        </router-link>

        <router-link
          :to="{
            name: 'home',
          }"
          class="nav-link"
        >
          Wassup ?!
        </router-link>

        <router-link
          :to="{
            name: 'home',
          }"
          class="nav-link"
        >
          Questions
        </router-link>

        <router-link
          :to="{
            name: 'home',
          }"
          class="nav-link"
        >
          Connexion
        </router-link>
      </div>

      <!--import and adapt burger menu from codpen.io-->
      <!-- https://codepen.io/Philippe_Fercha/pen/rqkci-->
      <div class="nav-burger">
        <nav class="menu-opener" v-on:click="toggle">
          <div class="menu-opener-inner"></div>
        </nav>
        <nav class="menu">
          <div class="menu-inner">
            <router-link
              :to="{
                name: 'home',
              }"
              exact
              class="nav-link menu-link"
            >
              Accueil
            </router-link>

            <router-link
              :to="{
                name: 'home',
              }"
              exact
              class="nav-link menu-link"
            >
              Trouve ton Skatepark
            </router-link>

            <router-link
              :to="{
                name: 'home',
              }"
              exact
              class="nav-link menu-link"
            >
              Trouve ton Matos
            </router-link>

            <router-link
              :to="{
                name: 'home',
              }"
              class="nav-link menu-link"
            >
              Wassup ?!
            </router-link>

            <router-link
              :to="{
                name: 'home',
              }"
              class="nav-link menu-link"
            >
              Questions
            </router-link>

            <router-link
              :to="{
                name: 'home',
              }"
              class="nav-link menu-link"
            >
              Connexion
            </router-link>
          </div>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",

  methods: {
    toggle: function () {
      const targetElements = [".menu-opener", ".menu", ".menu-opener-inner"];

      targetElements.forEach((element) => {
        document.querySelector(element).classList.toggle("active");
      });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.nav {
  background-color: $black;
  color: $grey;
  display: flex;
  justify-content: space-between;

  .nav-logo-header {
    .nav-logo {
      width: 120px;
      height: auto;
      float: left;
    }
  }

  .nav-desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 5em;
    list-style: none;

    .nav-link {
      color: $grey;
      font-family: "Righteous";
      text-decoration: none;
    }

    .nav-link:hover,
    .nav-link:focus {
      color: $white;
      border-bottom: $orange solid 1px;
      transition: 1s;
    }

    .nav-link--active {
      color: $white;
      font-family: "Righteous";
      border-bottom: $orange solid 1px;
    }

    .nav-link-avatar {
      background-color: $white;
      width: 50px;
      height: auto;
      padding: 5px;
      border-radius: 50%;
      border: 1px $white solid;
      overflow: hidden;
    }
  }

  .nav-burger {
    display: flex;
    align-items: center;
    justify-content: center;

    .menu-opener,
    .menu-opener:hover,
    .menu-opener.active,
    .menu-opener-inner,
    .menu-opener-inner::before,
    .menu-opener-inner::after,
    .menu,
    .menu.active {
      -webkit-transition: 250ms all;
      transition: 250ms all;
    }

    .menu-opener {
      background: transparent;
      cursor: pointer;
      height: 64px;
      width: 64px;
      user-select: none;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    .menu-opener:hover,
    .menu-opener.active {
      background: $orange;
    }

    .menu-opener-inner {
      background: $white;
      height: 0.5rem;
      width: 2.5rem;
    }
    .menu-opener-inner::before,
    .menu-opener-inner::after {
      background: white;
      content: "";
      display: block;
      height: 0.5rem;
      width: 2.5rem;
    }
    .menu-opener-inner::before {
      -webkit-transform: translateY(-0.75rem);
      -ms-transform: translateY(-0.75rem);
      transform: translateY(-0.75rem);
    }
    .menu-opener-inner::after {
      -webkit-transform: translateY(0.25rem);
      -ms-transform: translateY(0.25rem);
      transform: translateY(0.25rem);
    }
    .menu-opener-inner.active {
      background: transparent;
    }
    .menu-opener-inner.active::before {
      -webkit-transform: translateY(0rem) rotate(-45deg);
      -ms-transform: translateY(0rem) rotate(-45deg);
      transform: translateY(0rem) rotate(-45deg);
    }
    .menu-opener-inner.active::after {
      -webkit-transform: translateY(-0.5rem) translateX(0rem) rotate(45deg);
      -ms-transform: translateY(-0.5rem) translateX(0rem) rotate(45deg);
      transform: translateY(-0.5rem) translateX(0rem) rotate(45deg);
    }

    .menu {
      background: $darkGrey;
      color: transparent;
      height: auto;
      position: absolute;
      top: 15%;
      left: 1%;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 0rem;
      z-index: 0;
    }
    .menu.active {
      width: -webkit-calc(100% - 0.5em);
      width: calc(100% - 0.5em);
    }
    .menu.active .menu-link {
      color: white;
    }

    .menu-inner {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: block;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      height: 100%;
      list-style-type: none;
      margin: 0;
      margin-left: 4rem;
      padding: 0;
    }

    .menu-link {
      color: transparent;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      padding: 10px 0;
      font-size: 1.2em;
      font-weight: 100;
      height: 100%;
      text-align: center;
      text-decoration: none;
      font-family: "Righteous";

    }
    .menu-link li {
      margin: auto;
    }
  }
}

@media (max-width: $mediumScreen) {
  .nav {
    flex-direction: row-reverse;
  
    .nav-desktop {
      width: 0%;
      .nav-link,
      .nav-link--active {
        display: none;
      }
    }
  }
}
@media (min-width: $mediumScreen + 1) {
  .nav {
    .nav-burger {
      display: none;
    }
  }
}
@media (min-width: $largeScreen) {
  .nav {
    justify-content: center;

    .nav-desktop {
      width: 1500px;
    }
  }
}
@media (max-width: 1100px) {
  .nav {
    .nav-desktop{
      padding: 0 1em;
    }
  }
}
</style>
