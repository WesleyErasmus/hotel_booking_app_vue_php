<script setup>
import { RouterView } from "vue-router";
</script>
<template>
  <!-- Conditionally rendering my nav by checking the name of the current route using v-if directive -->
  <SideNavigationDrawer v-if="!['login'].includes($route.name)" />

  <main>
    <RouterView />
  </main>
</template>
<script>
import SideNavigationDrawer from "./components/SideNavigationDrawer.vue";
export default {
  components: { SideNavigationDrawer },
};
</script>
<style scoped>

</style>
