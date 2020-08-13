import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login";
import Oportunity from "../views/Oportunity";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect:"/login",
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Página Login"
    },
    component: Login
  },
  {
    path: "/Oportunity",
    name: "Oportunity",
    meta: {
      isAuth: true,
      title: "Página Oportunity"
    },
    component: Oportunity
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
