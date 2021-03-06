import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contacts.vue"),
  },
  {
    path: "/payment_confirmation",
    name: "PaymentConfirmation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PaymentConfirm.vue"),
  },
  {
    path: "/instagram_auth",
    name: "InstagramAuth",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InstagramAuth.vue"),
  },
  {
    path: "/night/:id",
    name: "NightDetails",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NightDetails.vue"),
  },
  {
    path: "/club/:id",
    name: "ClubDetails",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ClubDetails.vue"),
  },

  {
    path: "/:catchAll(.*)",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
