<template>
  <v-app id="app-content">
    <div class="hotel-page-main-content">
      <v-row>
      <HotelCard class="hotel-card" />
      <HotelCard class="hotel-card" />
      <HotelCard class="hotel-card" />
      <HotelCard class="hotel-card" />
      <HotelCard class="hotel-card" />
      <HotelCard class="hotel-card" />
      <HotelCard class="hotel-card" />
      <HotelCard class="hotel-card" />
      <HotelCard class="hotel-card" />
      </v-row>
    </div>
  </v-app>
</template>

<script>
import HotelCard from './HotelsPageComponents/HotelCard.vue';
export default {
  components: { HotelCard },
};
</script>

<style>
.hotel-page-main-content {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
}
.hotel-card {
  padding: 0 2rem;
}
</style>
