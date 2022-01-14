<template>
      <div class="connection">
      <h1 class="title">Connecte toi ou sinon, inscrit toi.</h1>

      <AlertMessage
        v-if="alert"
        :alertMessageProps="alertMessage"
      />

      <div class="container-forms">
        <form class="form-register" @submit="handleSubmitSubscribe">
          <h2 class="form-title">
            Tu n'a pas de compte ? Crées-en un!
          </h2>
          <label>Nom d'utilisateur
            <input
              id="username"
              type="text"
              class="form-input"
              v-model="username"
              required
            />
          </label>
          <label>Nom
            <input
              id="lastname"
              type="text"
              class="form-input"
              v-model="lastname"
              
            />
          </label>
          <label>Prénom
            <input
              id="firstname"
              type="text"
              class="form-input"
              v-model="firstname"
              
            />
          </label>
          <label>Rue
            <input
              id="street"
              type="text"
              class="form-input"
              v-model="street"
              
            />
          </label>
          <label>Code postal
            <input
              id="postal"
              type="text"
              class="form-input"
              v-model="zipcode"
              
            />
          </label>
          <label>Ville
            <input
              id="city"
              type="text"
              class="form-input"
              v-model="city"
              
            />
          </label>
          <label>Email
            <input
              id="email"
              type="email"
              class="form-input"
              v-model="email"
              required

            />
          </label>
          <label>Password
            <input
              id="passwordInscription"
              type="password"
              class="form-input"
              v-model="password"
              required
            />
          </label>
          <button class="button" type="submit">
            Inscription
          </button>
        </form>

        <form class="form-connection" @submit="handleSubmitLogin">
          <h2 class="form-title">
            Tu a déjà un compte ? Connecte toi!
          </h2>
          <label>Nom d'utilisateur
            <input
              id="usernameConnexion"
              type="text"
              class="form-input"
              v-model="usernameLogin"
              required
            />
          </label>
          <label>Password
            <input
              id="passwordConnexion"
              type="password"
              class="form-input"
              v-model="passwordLogin"
              required
            />
          </label>
          <button class="button" type="submit">
            Connexion
          </button>
        </form>
      </div>
    </div>
</template>

<script>
import AlertMessage from '../components/AlertMessage.vue';

export default {
  name:"Subscribe",
  components: {
    AlertMessage,
  },

  data() {
    return {
      username: "",
      lastname: "",
      firstname: "",
      street: "",
      zipcode: "",
      city: "",
      email: "",
      password: "",

      usernameLogin: "",
      passwordLogin: "",

      alert: false,
      alertMessage:  ""
    }
  },

  methods: {
    handleSubmitSubscribe: async function (event) {
      event.preventDefault();

      if (
        this.username != "" &&
        this.email != "" &&
        this.password != ""
      ) {
        const result = await this.$store.state.services.user.saveNewUser(
          this.username,
          this.lastname,
          this.firstname,
          this.street,
          this.zipcode,
          this.city,
          this.email,
          this.password,
        );
        
        if (result.data.succes == 'this username already exist') {
          this.alert = true;
          this.alertMessage = "Ce nom d'utilisateur existe déjà";
        } else if (result.data.succes == 'this email is already used') {
          this.alert = true;
          this.alertMessage = "Cet email est déjà pris";
        } else if (result.data.succes == false) {
          this.alert = true;
          this.alertMessage = "L'inscription a échoué : vérifie que tu as bien rempli tous les champs";
        } else if (result.data.succes === true) {
          this.alert = true;
          this.alertMessage = "Inscription réussite : connecte toi maintenant";
          this.username='';
          this.lastname='';
          this.firstname='';
          this.street='';
          this.zipcode='';
          this.city='';
          this.email='';
          this.password='';
        }
      } else {
        this.alert = true;
        this.alertMessage = "L'inscription a échoué : vérifie que tu as bien rempli tous les champs";
      }

      console.log(this.AlertMessage)
    },

    handleSubmitLogin: async function(event) {
      event.preventDefault();

      if (
        this.usernameLogin != "" &&
        this.passwordLogin != ""
      ) {
        
        let userData = await this.$store.state.services.user.login(this.usernameLogin, this.passwordLogin);

        if (!userData) {
          this.alert = true;
          this.alertMessage = "Nom d'utilisateur ou mot de passe incorrect";
        }

        if (userData.token) {
          this.$store.state.services.token.set('userData', userData);
          this.$router.push({name: 'userHome'});
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.connection {
  font-family: 'Righteous';

  .container-forms {
    display: flex;
    margin: auto;
    max-width: 1000px;
    color: $white;
  
    .form-register {
      width: 50%;
      padding: 1em;
      margin-right: 2em;
    }

    .form-connection {
      width: 50%;
      padding: 1em;
      margin-left: 2em;
    }

    .button {
      margin-top: 0.5em;
    }
  }
}
.form-title {
  color: $white;
  text-align: center;
  font-size: 1.3em;
  margin-bottom: 0.6em;
  padding-bottom: 0.3em;
  border-bottom: solid 1px $orange;
}
.form-input {
  width: 100%;
  margin: 0.5em 0;
}

@media (max-width: $smallScreen) {

  .connection {

    .container-forms {
      flex-direction: column-reverse;
      align-items: center;
  
      .form-register,
      .form-connection {
        margin: 0;
        width: 95%;
      }
    }
  }
  .form-title {
    font-size: 1em;
  }
}
@media (min-width: $smallScreen +1 ) and (max-width: $mediumScreen) {

  .connection {

    .container-forms {
      flex-direction: column-reverse;
      align-items: center;
  
      .form-register,
      .form-connection {
        margin: 1em 0;
        width: 70%;
      }
    }
  }
}

</style>