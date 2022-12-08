<template>
  <v-card
    :loading="loading"
    class="mx-5 my-12 hotel-card-body"
    max-width="20vw"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ></v-img>

    <v-card-item>
      <v-card-title>The Hilton</v-card-title>

      <v-card-subtitle>
        <span class="mr-1">This weeks choice</span>

        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 text-subtitle-1">$ • Penthouse, Suite</div>

      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, adipisci?
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Availability</v-card-title>

    <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>Mon</v-chip>

        <v-chip>Tues</v-chip>

        <v-chip>Wed</v-chip>

        <v-chip>Fri</v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn color="black" variant="tonal" block @click="reserve">
        VIEW HOTEL
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
.hotel-card-body {
    border: none !important;
    box-shadow: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
</style>
