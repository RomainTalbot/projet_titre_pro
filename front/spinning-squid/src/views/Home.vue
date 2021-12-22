<template>
  <div class="home-container">
    <div class="home-header">
      <h1 class="home-title">Spinning Squid</h1>
      <img class="home-logo" src="" alt="logo spinning squid" />
      <img class="home-image" src="" alt="skatepark" />
    </div>
    <div class="main-container">
    <p class="home-p">SPINNING SQUID n'a rien à voir avec une technique ninja de lancé de poulpes ou même de pêche. C'est un site communautaire pour te mettre en relation avec des personnes qui partagent la même passion que toi : le skatebord (sous toutes ses formes) !
    Ici tu peux partager tes meilleurs spot, les events proches de chez toi ou bien du matos dont tu veux te séparer.</p>

    <router-link 
      :to="{
        name: 'home',
      }">
      <div class="home-nav-container">
        <img class="home-nav-image" src="" alt="skatepark" />
        <p class="home-nav-description">Si tu cherches un bon spot, ça se passe ici !</p>
      </div>
    </router-link>
    <router-link 
      :to="{
        name: 'home',
      }">
      <div class="home-nav-container">
        <img class="home-nav-image" src="" alt="skatepark" />
        <p class="home-nav-description">Tu cherches une planche ? Des trucks ? Des fringues ? Vient voir ce que les skateurs de chez toi te proposent</p>
      </div>
    </router-link>
    <router-link 
      :to="{
        name: 'home',
      }">
      <div class="home-nav-container">
        <img class="home-nav-image" src="" alt="skatepark" />
        <p class="home-nav-description">"Hey homie wassup ?!" voyons voir ce qu'il se passe près de chez toi </p>
      </div>
    </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
</style>
