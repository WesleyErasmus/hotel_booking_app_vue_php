<template>
  <v-card class="mx-auto" title="Sign up">
    <v-container>
      <v-form v-model="signUpForm" @submit.prevent="onSignUp" lazy-validation>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="firstname"
              :readonly="loading"
              :rules="nameRules"
              clearable
              color="primary"
              label="First name"
              variant="underlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="lastname"
              :readonly="loading"
              :rules="nameRules"
              clearable
              color="primary"
              label="Last name"
              variant="underlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="email"
              :readonly="loading"
              color="primary"
              :rules="emailRules"
              label="Email"
              variant="underlined"
              clearable
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="password"
              :readonly="loading"
              :rules="loginPasswordRules"
              color="primary"
              label="Password"
              clearable
              counter
              variant="underlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="passwordConfirm"
              :readonly="loading"
              :rules="[passwordMatch]"
              color="primary"
              clearable
              counter
              label="Confirm Password"
              variant="underlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            variant="elevated"
            block
            :loading="loading"
            size="large"
            type="submit"
            color="black"
          >
            SIGN UP
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loginEmail: "",
    loginPassword: "",
    // Password validation
    loginPasswordRules: [
      (v) =>
        v.length >= 8 || "Your password must be at least 8 characters long",
    ],
    // ========== REGISTRATION FORM ==========
    signUpForm: false,
    firstname: "",
    nameRules: [(v) => !!v || "Required"],
    lastname: "",
    email: "",
    password: "",
    // Password confirmation
    passwordConfirm: "",
    // ========== APPLIES TO BOTH FORMS ==========
    // Email validation
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "Please enter a valid email",
    ],
    loading: false,
  }),
  methods: {
    onSignUp() {
      if (!this.signUpForm) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);

      window.location.reload();
    },
  },
  computed: {
    passwordMatch() {
      return () =>
        this.password === this.passwordConfirm || "Password must match";
    },
  },
};
</script>

<style></style>
