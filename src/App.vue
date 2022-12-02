<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <SideNavigationDrawer />


  <RouterView />
</template>
<script>
import SideNavigationDrawer from "./components/SideNavigationDrawer.vue";
export default {
  components: { SideNavigationDrawer },
};
</script>
<style scoped>
.hello {
  position: absolute;
  left: 300px;
  z-index: 899;
}
.test-flex {
  display: flex;
  flex-direction: row;
}
</style>
