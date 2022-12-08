<template>
  <v-app id="app-content" class="mx-auto">
    <v-main class="profile-main">
      <div class="profile-card-user-details">
        <div class="flex-header">
          <header>
            <h1 class="text-h2">Manage Profile</h1>
            <div class="profile-page-title-container">
              <v-icon class="account-icon">mdi-account</v-icon>
              <!-- <h1 class="text-h2">Manage Profile</h1> -->
              <div>
                <h1 class="text-h4">Wesley Erasmus</h1>
                <h1 class="text-h6">me@you.com</h1>
              </div>
            </div>
          </header>

          <div class="user-information-disclaimer">
            Your information is safe with us and does not get sold or used for
            Marketing. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, deserunt!
          </div>
        </div>

        <section>
          <div class="table-container">
            <!-- <h4>Update your profile information</h4> -->
            <br />
            <v-table>
              <td class="table-heading">Your account information</td>
            </v-table>
            <v-table class="">
              <tbody>
                <!-- name - surname - email - phone  -->
                <tr>
                  <td class="table-label">Name</td>
                  <td>Wesley</td>
                  <td>
                    <div class="edit-btn" color="white">
                      <EditProfileDialog />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="table-label">Surname</td>
                  <td>Erasmus</td>
                  <td>
                    <div class="edit-btn" color="white">
                      <EditProfileDialog />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="table-label">Email address</td>
                  <td>me@you.com</td>
                  <td>
                    <div class="edit-btn" color="white">
                      <EditProfileDialog />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="table-label">Phone number</td>
                  <td>083 705 6273</td>
                  <td>
                    <div class="edit-btn" color="white">
                      <EditProfileDialog />
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </section>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import EditProfileDialog from "./ProfilePageComponents/EditProfileDialog.vue";
export default {
  components: { EditProfileDialog },
  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped>
.profile-main {
  border: none !important;
}
.profile-page-title-container {
  display: flex;
  line-height: 1;
  align-items: center;
  margin-bottom: 3rem;
}
.flex-header {
  display: flex;
  justify-content: space-between;
}
.text-h2 {
  margin-bottom: 2rem;
}
.account-icon {
  font-size: 62px;
  margin-right: 12px;
  background: linear-gradient(
    338deg,
    rgba(242, 241, 239, 1) 0%,
    rgba(254, 247, 234, 1) 43%,
    rgba(222, 221, 219, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 2.5rem;
  border-radius: 50%;
  border: 2px solid gold;
}
.user-information-disclaimer {
  background: var(--transparent-bg);
  padding: 2rem 1rem;
  border-radius: 10px;
  margin: 3rem 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 150px;
  width: 450px;
}
/* === V_CARD === */
.profile-card-user-details {
  width: 750px;
  border: none;
  padding: 4rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 70vw;
}
.edit-btn {
  float: right;
}
.table-container {
}
.table-heading {
  background: rgba(226, 226, 226, 0.705);
  display: block;
  width: 100%;
  padding: 0.5rem !important;
  margin-bottom: 1rem;
  border-radius: 5px;
}
td {
  border-bottom: none !important;
  padding: 1.5rem !important;
}
.table-label {
  width: 200px;
}
</style>
