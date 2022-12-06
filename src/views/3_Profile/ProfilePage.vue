<template>
  <v-app id="app-content" class="mx-auto">
    <v-main class="profile-main">
      <v-card class="profile-card-user-details">
        <header>
          <div class="profile-page-title-container">
            <v-icon>mdi-account</v-icon>
            <h1>Manage Profile</h1>
          </div>
        </header>

        <section>
          <div class="user-information-disclaimer">
            Your information is safe with us and does not get sold or used for
            Marketing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt!
          </div>

          <v-form class="">
            <h4>Have modal appear when edit gets clicked</h4>
            <p>Update your profile information</p>
            <br />
            <v-label>First Name</v-label>
            <v-text-field variant="underlined">Wesley</v-text-field>
            <v-label>Last Name</v-label>
            <v-text-field variant="underlined">Erasmus</v-text-field>
            <v-label>Email Address</v-label>
            <v-text-field variant="underlined">wesley@me.com</v-text-field>
            <v-label>Cellphone Number</v-label>
            <v-text-field variant="underlined">+27835720741</v-text-field>

            <v-btn class="edit-btn" color="black">Edit Your Information</v-btn>
          </v-form>
        </section>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-main {
}
.profile-page-title-container {
    display: flex;
    line-height: 1;
}
.user-information-disclaimer {
    background: var(--transparent-bg);
    padding: 2rem 1rem;
    width: 450px;
    border-radius: 10px;
    margin: 2rem 0;
}
/* === V_CARD === */
.profile-card-user-details {
    width: 750px;
    border: none;
    padding: 4rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.edit-btn {
    float: right;
}
</style>
