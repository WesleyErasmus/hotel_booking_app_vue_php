<template>
  <router-link :to="{ name: 'dashboard' }">
    <v-btn>Dashboard</v-btn>
  </router-link>

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
.form-wrapper {
  display: block;
  margin: 0 auto;
  width: 30vw;
}
.login-tabs {
  height: 65px;
  padding: 0.75rem;
}
</style>
