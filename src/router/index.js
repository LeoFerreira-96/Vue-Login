import Vue from "vue";
import VueRouter from "vue-router";

import { AUTH_TOKEN } from "../plugins/apollo";
import Auth from "../services/auth";
import Login from "../views/Login";
import Activity from "../views/Activity";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Página Login",
    },
    component: Login,
  },
  {
    path: "/activity",
    name: "Activity",
    meta: {
      isAuth: true,
      title: "Página Atividades",
    },
    component: Activity,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((route) => route.meta.isAuth)) {
    const token = window.localStorage.getItem(AUTH_TOKEN);
    const loginRoute = {
      path: "/login",
    };
    const nextRoute = {
      path: "/activity",
    };
    if (token) {
      try {
        await Auth.user({ fetchPolicy: "network-only" });
        return next(nextRoute);
      } catch (error) {
        console.log("erro no uto login");
        return next(loginRoute);
      }
    }
    return next(loginRoute);
  }
  next();
});

export default router;
