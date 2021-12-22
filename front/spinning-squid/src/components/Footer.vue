<template>
  <header>
    <nav class="navFooter">
      <router-link
        :to="{
          name: 'home',
        }"
      >
        <li className="navFooter-link">Nous contacter</li>
      </router-link>

      <router-link
        :to="{
          name: 'home',
        }"
      >
        <li class="navFooter-link">Newsletter</li>
      </router-link>

      <router-link
        :to="{
          name: 'home',
        }"
      >
        <li class="navFooter-link">Spinning Squad</li>
      </router-link>
    </nav>
  </header>
</template>

<script>
</script>

<style>
</style>