<template>
  <div class="contact">
    <h1 class="title">Que puis-je pour toi jeune skateur ?</h1>
    <div class="contact-container">
      <img class="contact-image" alt="logo noir et blanc" src="../assets/images/logo-blanc.png" />
      <form class="contact-form">
        <label class="contact-label">Sujet</label>
        <input id="subject" class="contact-input" type="text" required />
        <label class="contact-label">Email</label>
        <input id="email" class="contact-input" type="email" required />
        <label class="contact-label"> Message</label>
        <textarea id="message" class="contact-input-message" required />

        <button class="button" type="submit">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name:"Contact",
}
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.contact {
  font-family: "Righteous";

  .contact-container {
    display: flex;
    margin: 2em auto;
    max-width: 1000px;
    color: $white;

    .contact-image {
      width: calc(50% - 10%);
      height: calc(50% - 10%);
    }

    .contact-form {
      width: 50%;

      .contact-input {
        width: 100%;
        margin: 1em 0;
      }

      .contact-input-message {
        width: 100%;
        height: 150px;
        margin: 1em 0;
      }
    }
  }

  @media (max-width: $mediumScreen) {
    .contact-container {
      display: flex;
      margin-top: 0em;
      flex-direction: column;
      align-items: center;

      .contact-form {
        width: 80%;
      }
    }
  }

  @media (max-width: $smallScreen) {
    .contact-container {
      .contact-image {
        width: calc(50% - 20%);
        height: calc(50% - 20%);
      }
      .contact-form {
        width: 98%;
      }
    }
  }
}
</style>