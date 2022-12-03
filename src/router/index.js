import { createRouter, createWebHistory } from "vue-router";

// ========== Imported pages and components ==========
import Login from "../views/0_Login/LoginPage.vue";
import Dashboard from "../views/1_Dashboard/DashboardPage.vue";
import Hotels from "../views/2_Hotels/HotelsPage.vue";
import Profile from "../views/3_Profile/ProfilePage.vue";

import PageNotFound from "../components/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/hotels",
      name: "hotels",
      component: Hotels,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      // Sends a 404 message to pages that can't be found
      path: "/:catchAll(.*)",
      name: "PageNotFound",
      component: PageNotFound,
    },
    // {
    // path: "/about",
    // name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
