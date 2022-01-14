<template>
  <div>
    <h1 class="title">Désolé mais je n'ai pas fini cette page</h1>
    <p class="subtitle">Repasse plus tard</p>

    <input
      id="uploadImage"
      class="add-image"
      type="file"
      name="image"
      accept="image/png, image/jpeg, image/jpg"
      multiple
      hidden
      @change="verification"
    />
  </div>
</template>

<script>
export default {
  name: 'ProductList',

  data() {
    return {
      image: ""
    }
  },
  methods: {
    verification: function(event) {
      console.log(event.target.files);
      console.log(document.querySelector('.add-image')['files'][0]);
      const test1 = document.querySelector('.add-image')['files'][0]
      console.log(this.$store.state.services.image.convertBase64(test1));
  }
}}
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