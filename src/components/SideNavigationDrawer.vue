<template>
  <v-layout>
    <v-navigation-drawer permanent location="left">
      <template v-slot:prepend>
        <v-list-item
          lines="two"
          prepend-avatar="https://randomuser.me/api/portraits/men/70.jpg"
          title="Wesley Erasmus"
          subtitle="Administrator"
        ></v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <RouterLink :to="{ name: 'dashboard' }">
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Dashboard"
            value="Dashboard"
          ></v-list-item>
        </RouterLink>
        <RouterLink :to="{ name: 'hotels' }">
          <v-list-item
            prepend-icon="mdi-account"
            title="Hotels"
            value="Hotels"
          ></v-list-item>
        </RouterLink>
        <RouterLink :to="{ name: 'profile' }">
          <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="Profile"
            value="Profile"
          ></v-list-item>
        </RouterLink>
      </v-list>

      <template v-slot:append>
        <RouterLink :to="{ name: 'login' }">
          <div class="pa-2">
            <v-btn block> Logout </v-btn>
          </div>
        </RouterLink>
      </template>
    </v-navigation-drawer>
    <!-- <v-main> hello</v-main> -->
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
