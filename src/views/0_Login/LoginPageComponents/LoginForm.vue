<template>
  <!-- ========== LOGIN FORM ========== -->
  <v-card class="mx-auto" title="Login">
    <v-container>
      <v-form v-model="loginForm" @submit.prevent="onSubmit" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="loginEmail"
              :readonly="loading"
              :rules="emailRules"
              class="mb-2"
              clearable
              label="Email"
              variant="underlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="loginPassword"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :readonly="loading"
              :rules="loginPasswordRules"
              :type="show2 ? 'text' : 'password'"
              clearable
              counter
              variant="underlined"
              label="Password"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>

          <br />

          <v-checkbox
            v-model="checkbox"
            label="Remember password?"
          ></v-checkbox>

          <v-col cols="12">
            <v-btn
              :loading="loading"
              block
              color="black"
              size="large"
              type="submit"
              variant="elevated"
            >
              LOGIN
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // ========== LOGIN FORM ==========
      loginForm: false,
      checkbox: false,
      loginEmail: "",
      loginPassword: "",
      // Password validation
      loginPasswordRules: [
        (v) =>
          v.length >= 8 || "Your password must be at least 8 characters long",
      ],
      // Email validation
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "Please enter a valid email",
      ],
      // Show/hide password
      show1: true,
      show2: false,
    };
  },
  methods: {
    onSubmit() {
      if (!this.loginForm) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);

      this.$router.push("/dashboard");
    },
  },
};
</script>

<style></style>
