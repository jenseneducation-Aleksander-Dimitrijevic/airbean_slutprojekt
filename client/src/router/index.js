import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Menu from "@/views/Menu.vue";
import OurCoffee from "@/views/OurCoffee.vue";
import Status from "@/views/Status.vue";
import Profile from "@/views/Profile.vue";
import OrderHistory from "@/views/OrderHistory.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/our-coffee",
    name: "our-coffee",
    component: OurCoffee
  },
  {
    path: "/status",
    name: "status",
    component: Status
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/profile/:id",
    name: "orderhistory",
    component: OrderHistory
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
