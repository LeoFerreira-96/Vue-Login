import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApollo from "vue-apollo";
import apollo from "./plugins/apollo";

Vue.config.productionTip = false;

Vue.use(VueApollo);

new Vue({
  router,
  store,
  apollo,
  render: (h) => h(App),
}).$mount("#app");
