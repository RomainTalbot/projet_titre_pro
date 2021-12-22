<template>
      <div class="connection main-container">
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
              onChange={handleOnChange}
            />
          </label>
          <button class="button" type="submit">
            Connexion
          </button>
        </form>
      </div>
    </div>
</template>