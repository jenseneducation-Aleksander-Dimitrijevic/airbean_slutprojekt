import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import OurCoffee from '../views/OurCoffee.vue'
import OurStatus from '@/views/OurStatus.vue';

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
    path: "/our-status",
    name: "our-status",
    component: OurStatus
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
