<template>
      <div class="connection">
      <h1 class="title">Connecte toi ou sinon, inscrit toi.</h1>

      <div class="container-forms">
        <form class="form-register" onSubmit={props.handleSubmitRegister}>
          <h2 class="form-title">
            Tu n'a pas de compte ? Crées-en un!
          </h2>
          <label>Nom d'utilisateur
            <input
              id="usernameInscription"
              type="text"
              class="form-input"
              required
            />
          </label>
          <label>Nom
            <input
              id="lastname"
              type="text"
              class="form-input"
              required
            />
          </label>
          <label>Prénom
            <input
              id="firstname"
              type="text"
              class="form-input"
              required
            />
          </label>
          <label>Rue
            <input
              id="street"
              type="text"
              class="form-input"
              required
            />
          </label>
          <label>Code postal
            <input
              id="postal"
              type="text"
              class="form-input"
              required
            />
          </label>
          <label>Ville
            <input
              id="city"
              type="text"
              class="form-input"
              required
            />
          </label>
          <label>Email
            <input
              id="email"
              type="email"
              class="form-input"
              required

            />
          </label>
          <label>Password
            <input
              id="passwordInscription"
              type="password"
              class="form-input"
              required
            />
          </label>
          <button class="button" type="submit">
            Inscription
          </button>
        </form>

        <form class="form-connection">
          <h2 class="form-title">
            Tu a déjà un compte ? Connecte toi!
          </h2>
          <label>Nom d'utilisateur
            <input
              id="usernameConnexion"
              type="text"
              class="form-input"
              required
            />
          </label>
          <label>Password
            <input
              id="passwordConnexion"
              type="password"
              class="form-input"
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
export default {
  name:"Subscribe",
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