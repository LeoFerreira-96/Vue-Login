import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activity: {
      title: "Lorem Ipson",
    },
  },
  mutations: {
    MAIN_SET_ACTIVITY(state, variables) {
      state.activity = variables;
    },
  },
  actions: {
    setActivity({ called }, variables) {
      called("MAIN_SET_ACTIVITY", variables);
    },
  },
  getters: {
    activity: (state) => state.activity,
  },
});

// o action chama o serviço de login pega resposta e guarda o token

// responde ok para action
