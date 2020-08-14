import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/Login";
import Activity from "../views/Activity";

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
    path: "/activity",
    name: "Activity",
    meta: {
      isAuth: true,
      title: "Página Atividades"
    },
    component: Activity
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
