<template>
  <div class="login-page-flex-container">
    <div class="login-page-image-section">
      <div class="login-page-heading-container">
        <h1 class="text-h1">Grandeur</h1>
        
      </div>
    </div>
    <h2 class="login-page-subtitle">Luxury Hotel Bookings.</h2>
    <div class="login-page-form-section">
      <!-- <router-link :to="{ name: 'dashboard' }">
        <v-btn>Dashboard</v-btn>
      </router-link> -->
      <v-card class="form-wrapper">
        <v-tabs v-model="tab" fixed-tabs bg-color="black" class="login-tabs">
          <v-tab value="login">
            <v-icon icon="mdi-account" />
            LOGIN</v-tab
          >
          <v-tab value="signIn">
            <v-icon icon="mdi-account-plus" />
            SIGN UP</v-tab
          >
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="login">
              <!-- ========== LOGIN FORM ========== -->
              <LoginForm />
            </v-window-item>
            <v-window-item value="signIn">
              <!-- ========== SIGN UP FORM ========== -->
              <SignUpForm />
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import LoginForm from "./LoginPageComponents/LoginForm.vue";
import SignUpForm from "./LoginPageComponents/SignUpForm.vue";
export default {
  components: { LoginForm, SignUpForm },
  data: () => ({
    // Tab data
    tab: null,
    valid: true,
  }),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
.login-page-flex-container {
  display: flex;
}

.login-page-image-section {
  width: 47vw;
  height: 100vh;
  background-image: url(https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  filter: grayscale();
  box-shadow: var(--box-shadow);
}
.login-page-heading-container {
  box-shadow: var(--box-shadow);
  padding: 3rem 0rem 8rem 0rem;
  width: 44vw;
  background: var(--transparent-bg);
  text-align: center; 
}
.login-page-heading-container h1 {
  color: #fff;
  line-height: 2.5;
  text-shadow: var(--box-shadow);
}
.login-page-subtitle {
  font-family: 'Italiana', serif;
  font-weight: 900;
  position: absolute;
  top: 10vh;
  width: 47vw;
  height: 90vh;
  text-align: center;
  font-size: calc(11px + 2.5rem);
  background: -webkit-linear-gradient(
    338deg,
    rgba(241, 209, 149, 1) 0%,
    rgba(246, 184, 72, 1) 43%,
    rgba(247, 225, 183, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-shadow: rgb(255, 255, 255) 1px 0 60px;
  text-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-decoration: overline 1px solid white;
}

.login-page-image-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-page-form-section {
  display: flex;
  margin: 0 auto;
  align-items: center;
  background: rgba(218, 217, 217, 0.171);
  width: 53vw;
}

.form-wrapper {
  display: block;
  margin: 0 auto;
  width: 33.5vw;
  padding-bottom: 1.5rem;
  border: none;
  box-shadow: none;
}

.login-tabs {
  height: 65px;
  padding: 0.75rem;
}

.grandeur-logo {
  position: absolute;
  font-size: 150px;
}
</style>
