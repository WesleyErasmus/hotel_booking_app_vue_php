<template>
  <v-app id="app-content">
    <v-main>
      
        <h1 class="text-h2">Your Bookings</h1>
      
      <h5 class="text-h5">
        You have no current bookings. View out HOTELS to make a booking
      </h5>

      <BookingCard />
    </v-main>
  </v-app>
</template>

<script>
import BookingCard from "./DashboardPageComponents/BookingsCard.vue";
export default {
  components: { BookingCard },
};
</script>

<style></style>
