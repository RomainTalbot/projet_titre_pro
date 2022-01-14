<template>
  <div class="main-container">
    <h1 class="title">Spinning Suad : l'équipe originelle</h1>
    <div class="squad-container">
      <div class="item-container">
        <img class="item-image" alt="" src='../assets/images/romain.png'/>
        <h3 class="item-name">Romain</h3>
        <h3 class="item-role">Scrum Master <br> Led Dev Back</h3>
      </div>
      <div class="item-container">
        <img class="item-image" alt="" src='../assets/images/geoffrey.png' />
        <h3 class="item-name">Geoffrey</h3>
        <h3 class="item-role">Led Dev Front</h3>
      </div>
      <div class="item-container">
        <img class="item-image" alt="" src='../assets/images/clara.png'/>
        <h3 class="item-name">Clara</h3>
        <h3 class="item-role">Product Owner</h3>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"SpinningSquad",
}


</script>

<style lang="scss">
@import "../assets/style/main.scss";

.squad-container {

  margin: 2em 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Righteous";
  color: $white;

  .item-container {
    margin: 1em;
    padding: 1em;
    text-align: center;
    box-shadow: 0 0 10px 0 $orange inset, 0 0 10px 4px $orange;
    border-radius: 10px;

    .item-image {
      width: auto;
      height: 13vh;
      margin: 1em;
    }

    .item-name {
      font-size: 1.5em;
      color: $orange;
      margin-bottom: 0.3em;
      font-family: "Sedgwick Ave Display";
    }
  }
}

@media (max-width: 1500px) {
  .squad-container {
    flex-wrap: wrap;
  }
}
</style>