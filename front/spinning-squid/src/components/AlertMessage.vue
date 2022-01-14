<template>
  <div class="alert">{{alertMessageProps}}</div>
</template>

<script>
export default {
  name: 'AlertMessage',

  props: {
    alertMessageProps: String,
  }
}
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.alert {
  background-color: $orange;
  width: 70%;
  margin: 0 auto;
  border-radius: 50px;
  padding: 0.5em 0;
  font-family: "Righteous";
  color: $black;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
</style>