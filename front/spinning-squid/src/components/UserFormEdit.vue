<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <section class="modal-body">
                 <form class="form-register" @submit="handleSubmit">
          <h2 class="form-title">
            Modifie les infos de ton compte
          </h2>
          <label>Nom
            <input
              id="lastname"
              type="text"
              class="form-input"
              v-model="lastname"
              required
            />
          </label>
          <label>Prénom
            <input
              id="firstname"
              type="text"
              class="form-input"
              v-model="firstname"
              required
            />
          </label>
          <label>Rue
            <input
              id="street"
              type="text"
              class="form-input"
              v-model="street"
              required
            />
          </label>
          <label>Code postal
            <input
              id="postal"
              type="text"
              class="form-input"
              v-model="zipcode"
              required
            />
          </label>
          <label>Ville
            <input
              id="city"
              type="text"
              class="form-input"
              v-model="city"
              required
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
              
            />
          </label>
          <label id="avatar-title">Avatar
          <input
            id="uploadImage"
            class="add-image"
            type="file"
            name="image"
            accept="image/png, image/jpeg, image/jpg"
            multiple
            hidden
              />
          </label>
          <div class="button-section">
            <button type="button" class="button" @click="close">Annuler</button>
            <button type="submit" class="button">Valider</button>
          </div>
        </form>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "UserFormEdit",

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
      image: ""
      
    }
  },

  async created() {

    this.userData = await this.$store.state.services.user.loadUserDataByUsername(); 

    this.username = this.userData[0].meta.username;
    this.lastname = this.userData[0].meta.lastname;
    this.firstname = this.userData[0].meta.firstname;
    this.street = this.userData[0].meta.street;
    this.zipcode = this.userData[0].meta.zipcode;
    this.city = this.userData[0].meta.city;
    this.email = this.userData[0].meta.email;

  },

  methods: {

    close() {
      this.$emit("close");
    },

    handleSubmit: async function (event) {
      event.preventDefault();

      if (this.lastname == '') {
        this.lastname = this.userData[0].meta.lastname;
      }
      if (this.firstname == '') {
        this.firstname = this.userData[0].meta.firstname;
      }
      if (this.street == '') {
        this.street = this.userData[0].meta.street;
      }
      if (this.zipcode == '') {
        this.zipcode = this.userData[0].meta.zipcode;
      }
      if (this.city == '') {
        this.city = this.userData[0].meta.city;
      }
      if (this.email == '') {
        this.email = this.userData[0].meta.email;
      }
      if (this.password == '') {
        this.password = this.userData[0].meta.password;
     }

      const result = this.$store.state.services.user.updateUser(
          this.username,
          this.lastname,
          this.firstname,
          this.street,
          this.zipcode,
          this.city,
          this.email,
          this.password,
      );

      if (result) {
        console.log("gg à toi");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: $darkGrey; 
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 70%;

  .modal-body {
    position: relative;
    padding: 20px 10px;

    .button-section {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;

      button {
        margin: 0;
      }
    }
  }
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

@media (max-width: $mediumScreen) {

.modal {
  width: 97%;
}
}
</style>