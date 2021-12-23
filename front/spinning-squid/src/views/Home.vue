<template>
  <div class="home-container">
    <div class="home-header">
      <h1 class="home-title">Spinning Squid</h1>
      <img
        class="home-logo"
        src="../assets/images/logo1.png"
        alt="logo spinning squid"
      />
      <img
        class="home-image"
        src="../assets/images/home-main.jpg"
        alt="skatepark"
      />
    </div>
    <div class="main-container">
      <p class="home-p">
        SPINNING SQUID n'a rien à voir avec une technique ninja de lancé de
        poulpes ou même de pêche. C'est un site communautaire pour te mettre en
        relation avec des personnes qui partagent la même passion que toi : le
        skatebord (sous toutes ses formes) ! Ici tu peux partager tes meilleurs
        spot, les events proches de chez toi ou bien du matos dont tu veux te
        séparer.
      </p>

      <router-link
        :to="{
          name: 'home',
        }"
        class="home-nav"
      >
        <div class="home-nav-container">
          <img
            class="home-nav-image"
            src="../assets/images/home-1.jpg"
            alt="skatepark"
          />
          <p class="home-nav-description">
            Si tu cherches un bon spot, ça se passe ici !
          </p>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'home',
        }"
        class="home-nav"
      >
        <div class="home-nav-container">
          <img
            class="home-nav-image"
            src="../assets/images/home-2.jpg"
            alt="skatepark"
          />
          <p class="home-nav-description">
            Tu cherches une planche ? Des trucks ? Des fringues ? Vient voir ce
            que les skateurs de chez toi te proposent
          </p>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'home',
        }"
        class="home-nav"
      >
        <div class="home-nav-container">
          <img
            class="home-nav-image"
            src="../assets/images/home-3.jpg"
            alt="skatepark"
          />
          <p class="home-nav-description">
            "Hey homie wassup ?!" voyons voir ce qu'il se passe près de chez toi
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.home-container {
  .home-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .home-logo {
      position: absolute;
      top: 0;
      height: 45%;
      width: 25%;
    }

    .home-title {
      color: $orange;
      position: absolute;
      --base: calc(
        (var(--min-font) * 1px) + (var(--max-font) - var(--min-font)) *
          ((100vw - 420px) / (1200 - 420))
      );
      --max-font: 110;
      --min-font: 30;
      font-size: var(--base);
      font-family: "Sedgwick Ave Display";
      text-shadow: black 10px 10px 10px;
      text-align: center;
      margin: 1em auto;
    }

    .home-image {
      width: 100%;
      height: auto;
      --base: calc(
        (var(--min-font) * 1px) + (var(--max-font) - var(--min-font)) *
          ((100vw - 420px) / (1200 - 420))
      );
      --max-font: 110;
      --min-font: 30;
      font-size: var(--base);
    }
  }

  .home-p {
    color: $white;
    line-height: 1.2em;
    text-align: center;
    padding: 1em;
    font-family: "Righteous";
  }

  .home-nav {
    .home-nav-container {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: center;
      margin: 0 auto;
      position: relative;
    }

    .home-nav-image {
      width: 100%;
      height: auto;
      margin: 1em auto;
      filter: blur(2px);
    }

    .home-nav-description {
      color: $white;
      position: absolute;
      font-size: 1em;
      font-weight: 300;
      font-family: "Sedgwick Ave Display";
    }
  }
}
@media (max-width: $smallScreen) {
  .home-container {
    .home-p {
      font-size: 0.8em;
    }
    .home-nav {
      .home-nav-image {
        width: 300px;
      }
    }
  }
}
@media (min-width: $smallScreen + 1) {
  .home-container {
    .home-p {
      font-size: 1.5em;
    }
    .home-nav {
      .home-nav-image {
        min-width: 480px;
      }
      .home-nav-description {
        font-size: 1.5em;
      }
    }
  }
}
@media (min-width: $mediumScreen + 1) {
  .home-container {
    .home-p {
      font-size: 1.8em;
    }
    .home-nav {
      .home-nav-image {
        min-width: 780px;
      }
      .home-nav-description {
        font-size: 2em;
      }
    }
  }
}
@media (min-width: $largeScreen) {
  .home-container {
    .home-nav {
      .home-nav-image {
        filter: blur(0px);
      }
      .home-nav-container:hover .home-nav-image {
        filter: grayscale(100%) blur(10px);
        transition: 0.5s;
      }
      .home-nav-description {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
        min-width: 100%;
        text-align: center;
        color: transparent;
        --responsive: calc(
          (var(--min-font) * 1px) + (var(--max-font) - var(--min-font)) *
            ((100vw - 420px) / (1200 - 420))
        );
        --max-font: 35;
        --min-font: 20;
        font-size: var(--responsive);
        font-weight: 300;
        text-transform: uppercase;
        transition: 0.5s;
      }
      .home-nav-container:hover .home-nav-description {
      line-height: 50px;
      color: $white;
      float: left;
      margin: 0;
      text-shadow: $black 10px 10px 10px;
      font-family: 'Sedgwick Ave Display';
    }
    }
  }
}
</style>
