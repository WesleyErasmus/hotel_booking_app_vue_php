<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ props }">
        <v-btn color="black" v-bind="props"
          ><v-icon>mdi-pencil-box-multiple</v-icon> EDIT</v-btn
        >
      </template>
      <v-card class="dialog-card">
        <v-card-title>
          <span class="text-h5">UPDATE YOUR PROFILE INFORMATION</span>
        </v-card-title>
        <v-container class="user-form-container">
          <v-row>
            <v-col cols="6">
              <v-text-field required>Wesley</v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field persistent-hint required>Erasmus</v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field required>me@you.com</v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field type="number" required>083 705 6273</v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*Click save to save your changes</small>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black" variant="tonal" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="black" variant="tonal" @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped>
.dialog-card {
  display: block;
  margin: 0 auto;
  padding: 2rem 5rem;
}

.user-form-container {
}

.text-h5 {
  font-weight: bold;
}
</style>
