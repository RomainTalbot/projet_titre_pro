<template>
  <div class="contact">
    <h1 class="title">Que puis-je pour toi jeune skateur ?</h1>

    <AlertMessage
      v-if="alert"
      :alertMessageProps="alertMessage"
    />

    <div class="contact-container">
      <img class="contact-image" alt="logo noir et blanc" src="../assets/images/logo-blanc.png" />
      <form class="contact-form" @submit="handleSubmit">
        <label class="contact-label">Sujet</label>
        <input id="subject" class="contact-input" type="text" v-model="subject" required />
        <label class="contact-label">Email</label>
        <input id="email" class="contact-input" type="email" v-model="email" required />
        <label class="contact-label"> Message</label>
        <textarea id="message" class="contact-input-message" v-model="message" required />

        <button class="button" type="submit">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script>
import AlertMessage from '../components/AlertMessage.vue'; 

export default {
  name:"Contact",
  components: {
    AlertMessage,
  },
  data() {
    return {
      subject: "",
      email: "",
      message: "",

      alert: false,
      alertMessage:  ""
    }
  },
  methods: {
    handleSubmit: function (event) {
      event.preventDefault();

      if (
        this.subject != '' &&
        this.email != '' &&
        this.message != ''
      ) {
        
        const result = this.$store.state.services.contact.sendUsEmail(
          this.subject,
          this.email,
          this.message
        );
        console.log(result);
        if (result) {
          this.alert = true;
          this.alertMessage = 'Ton message a bien été envoyé';
        }
      } else {
        this.alert = true;
        this.alertMessage = 'Regarde si tu as bien rempli tous les champs';
      }

    }
  }
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