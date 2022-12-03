<template>
  <v-layout>
    <!-- <v-app-bar>Test app bar</v-app-bar> -->
    <v-navigation-drawer permanent location="left" :width="325">
      <template v-slot:prepend>
        <v-list-item
          class="pa-5"
          lines="two"
          prepend-avatar="https://randomuser.me/api/portraits/men/81.jpg"
          title="Wesley Erasmus"
          subtitle="Administrator"
        ></v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <RouterLink :to="{ name: 'dashboard' }">
          <v-list-item
            class="pa-4"
            prepend-icon="mdi-apps"
            value="Dashboard"
            >Dashboard</v-list-item
          >
        </RouterLink>
        <RouterLink :to="{ name: 'hotels' }">
          <v-list-item class="pa-4" prepend-icon="mdi-home-city" value="Hotels"
            >Hotels</v-list-item
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
