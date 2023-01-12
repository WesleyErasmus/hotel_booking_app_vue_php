<template>
  <div class="booking-cards-wrapper">
    <v-card class="hotel-card-container" max-width="400">
      <v-card-title>Hilton Hotel Booking</v-card-title>
      <v-img
        class="align-end text-white"
        height="200"
        src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        cover
      >
        <!-- <v-card-title>Hilton Hotel Booking</v-card-title> -->
      </v-img>

      <v-card-subtitle class="pt-4"
        >Booking date: Dec 24 - Jan 02
      </v-card-subtitle>

      <v-card-text>
        <v-card-subtitle>Booking duration: 10 Days</v-card-subtitle>

        <v-card-subtitle>Cost per night: R100</v-card-subtitle>
        <v-card-subtitle>Total cost: R1000</v-card-subtitle>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange"> Edit Booking </v-btn>

        <v-btn color="orange"> Cancel booking </v-btn>
      </v-card-actions>
    </v-card>

    <!-- HOTEL CARD TWO -->

    <v-card class="hotel-card-container" max-width="400">
      <v-card-title>Fire & Ice Hotel Booking</v-card-title>
      <v-img
        class="align-end text-white"
        height="200"
        src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
        cover
      >
        <!-- <v-card-title>Hilton Hotel Booking</v-card-title> -->
      </v-img>

      <v-card-subtitle class="pt-4"
        >Booking date: Dec 24 - Jan 02
      </v-card-subtitle>

      <v-card-text>
        <v-card-subtitle>Booking duration: 10 Days</v-card-subtitle>

        <v-card-subtitle>Cost per night: R100</v-card-subtitle>
        <v-card-subtitle>Total cost: R1000</v-card-subtitle>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange"> Edit Booking </v-btn>

        <v-btn color="orange"> Cancel booking </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.booking-cards-wrapper {
  display: flex;
}
.hotel-card-container {
  box-shadow: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 10px;
  margin: 0 2rem 2rem 0;
}
</style>
