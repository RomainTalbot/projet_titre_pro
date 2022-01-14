<template>
  <div class="profile">
    <h1 class="title profile-title" v-for="data in userData" :key="data.name">
      Bienvenue sur ton compte {{ data.name }}
    </h1>
    <button class="button logout-button" @click="logout">Déconnexion</button>
    <div class="profile-container">
      <img
        class="profile-avatar"
        v-if="getImageURL == false"
        src="../assets/images/logo-noir.png"
        alt="1"
      />
      <img class="profile-avatar" v-else :src="getImageURL" alt="avatar" />
      <p class="profile-name"></p>

      <div class="profile-button-dock">
        <button class="button" type="button" @click="showModal">Editer mon profil</button>
        <UserFormEdit 
          v-show="isModalVisible" 
          @close="closeModal"
        />
          
        <button class="button" type="button" @click="deleteUser">Supprimer compte</button>
      </div>
    </div>

    <div class="profile-contribution">
      <h2 class="profile-contribution-title">Mes contributions</h2>

      <h2 class="profile-add-title">Spot(s) ajouté(s)</h2>
      <div class="profile-contribution-articles">
        <div class="profile-articles-title" v-if="userDataSkatepark == 0">
          Aucun skatepark
        </div>
        <div
          v-else
          v-for="dataSkatepark in userDataSkatepark"
          :key="dataSkatepark.id"
        >
          <h3 class="profile-articles-title">
            {{ dataSkatepark.title.rendered }}
          </h3>
          <div class="profile-articles-button-dock">
            <button class="button" type="button">
              <router-link
                :to="{
                  name: 'skateparkDetails',
                  params: {
                    id: dataSkatepark.id,
                  },
                }"
              >
                Consulter
              </router-link>
            </button>

            <button class="button" type="button" to="">
              <router-link
                :to="{
                  name: 'skateparkEdit',
                  params: {
                    id: dataSkatepark.id,
                  },
                }"
              >
                Modifier
              </router-link>
            </button>
          </div>
        </div>
      </div>

      <h2 class="profile-add-title">Annonce(s) de matos</h2>
      <div class="profile-contribution-articles"></div>

      <h2 class="profile-add-title">Évènement ajouté(s)</h2>
      <div class="profile-contribution-articles"></div>
    </div>
  </div>
</template>

<script>
import UserFormEdit from "../components/UserFormEdit.vue"
export default {
  name: "UserHome",

  components: {
    UserFormEdit,
  },

  async created() {
    this.userData =
      await this.$store.state.services.user.loadUserDataByUsername();

    this.userDataSkatepark =
      await this.$store.state.services.user.loadUserSkateparks(
        this.userData[0].id
      );

    this.userAvatar =
      await this.$store.state.services.user.loadUserAvatarByMediaId(
        this.userData[0].meta.avatar
      );
  },

  data() {
    return {
      userData: [],
      userDataSkatepark: [],
      userAvatar: "",
      isModalVisible: false,
    };
  },
  
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    logout() {
      this.$store.state.services.user.logout();

      this.$router.push({name: 'home'});
    },
    deleteUser: async function() {

      const userId = this.userData[0].id

      const result = await this.$store.state.services.user.deleteUser(userId);

      if (result.data.succes == 'user deleted') {
        window.alert('Ton compte a bien été supprimé');
        this.logout();
        this.$router.push({name: 'home'});
      } else if (result.data.succes == 'not allowed') {
        window.alert("Tu n'es pas autorisé à modifier ce spot ! Vilain !");
        this.logout();
      } else if (result.data.succes == false) {
        window.alert("Ton compte n'a pas été supprimé");
      }
    }
  },

  computed: {
    getImageURL() {
      if (this.userAvatar.media_details) {
        if (this.userAvatar.media_details.sizes.medium) {
          return this.userAvatar.media_details.sizes.medium.source_url;
        } else if (this.userAvatar.media_details.sizes.thumbnail) {
          return this.userAvatar.media_details.sizes.thumbnail.source_url;
        } else {
          return this.userAvatar.media_details.sizes.full.source_url;
        }
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style/main.scss";

.profile {
  color: $white;
  font-family: "Righteous";

  .profile-title {
    margin-bottom: 1em;
  }

  .logout-button {
    font-size: 1.2em;
  }

  .profile-container {
    width: 600px;
    height: auto;
    margin: 2em auto 2em;
    border: solid 1px $white;
    padding: 1em 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .profile-avatar {
      width: 70px;
      height: auto;
      background-color: $white;
      border-radius: 50%;
      padding: 0.2em;
    }

    .profile-name {
    }

    .profile-button-dock {
      display: flex;

      button {
        margin-left: 0.5em;
      }
    }
  }

  .profile-contribution {
    max-width: 800px;
    height: auto;
    margin: auto;

    .profile-contribution-title {
      text-align: center;
      font-size: 2.8em;
      margin: 1em;
      font-family: "Sedgwick Ave Display";
    }

    .profile-add-title {
      text-align: center;
      margin: 1.5em;
      font-size: 1.5em;
    }

    .profile-contribution-articles {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      border: solid 1px;
      padding: 1em;

      .profile-articles-title {
        width: 25vh;
        padding: 0.5em;
        margin: auto;
      }

      .profile-articles-button-dock {
        display: flex;
        margin: auto;

        button {
          margin: 0 0.5em 0.5em;
        }
      }
    }
  }
}

@media (max-width: $smallScreen) {
  .profile {
    .profile-title {
      margin-bottom: 0.5em;
    }
    .profile-container {
      max-width: 300px;
      margin: 0 auto 2em;
      padding: 1em 0;

      .profile-avatar {
        width: 35px;
      }
      .profile-name {
      }
      .profile-button-dock {
        display: flex;
        flex-direction: column;

        button {
          margin-bottom: 0.5em;
        }
      }
    }
    .profile-contribution {
      .profile-contribution-title {
        text-align: center;
        font-size: 1.5em;
        margin: 0.5em;
      }
      .profile-add-title {
        margin: 1em;
        font-size: 1em;
      }
      .profile-contribution-articles {
        display: flex;
        align-items: center;
        border: solid 1px;
        padding: 0.5em;
        margin: 0.5em;

        .profile-articles-title {
          width: 50%;
          text-align: center;
          white-space: pre-line;
          word-break: break-all;
        }

        .profile-articles-button-dock {
          display: flex;

          button {
          }
        }
      }
    }
  }
}
@media (max-width: $mediumScreen) {
  .profile {
    .profile-title {
      margin-bottom: 0.5em;
    }
    .logout-button {
      margin-bottom: 2em;
    }
    .profile-container {
      width: 400px;
      margin: 0 auto 2em;
      padding: 1em 0;

      .profile-avatar {
        width: 35px;
      }
      .profile-name {
      }
      .profile-button-dock {
        display: flex;
        flex-direction: column;

        button {
          margin-bottom: 0.5em;
        }
      }
    }

    .profile-contribution {
      .profile-contribution-title {
        font-size: 2em;
      }

      .profile-add-title {
        font-size: 1.2em;
      }

      .profile-contribution-articles {
        .profile-articles-title {
          padding: 0.5em;
          text-align: center;
          white-space: pre-line;
          word-break: break-all;
        }

        .profile-articles-button-dock {
          button {
          }
        }
      }
    }
  }
}
</style>