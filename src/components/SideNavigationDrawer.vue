<template>
  <v-layout>
    <v-navigation-drawer
      class="pr-2"
      border="none"
      permanent
      location="left"
      :width="325"
      color="rgba(218, 217, 217, 0.171)"
    >
      <template v-slot:prepend>
        <v-list-item class="pa-5">
          <div class="text-h2">Grandeur</div>
          <!-- <p>Experience the luxury you deserve</p> -->
        </v-list-item>
      </template>

      <v-list density="compact" nav>
        <RouterLink :to="{ name: 'dashboard' }">
          <RouterLink :to="{ name: 'hotels' }">
            <v-list-item
              class="pa-4"
              prepend-icon="mdi-home-city"
              value="Hotels"
              >Hotels</v-list-item
            >
          </RouterLink>
          <v-list-item class="pa-4" prepend-icon="mdi-apps" value="Dashboard"
            >Bookings</v-list-item
          >
        </RouterLink>
        <RouterLink :to="{ name: 'profile' }">
          <v-list-item
            class="pa-4 drawer-list-item"
            prepend-icon="mdi-account"
            value="Profile"
            >Profile</v-list-item
          >
        </RouterLink>
      </v-list>

      <template v-slot:append>
        <RouterLink :to="{ name: 'login' }">
          <div class="pa-2">
            <v-btn block color="black"> Logout </v-btn>
          </div>
        </RouterLink>
      </template>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {};
</script>

<style scoped>
/* Nav links styling */
nav a {
  text-decoration: none;
  color: inherit;
}

nav a.router-link-exact-active {
  text-decoration: none;
}
</style>
