import { createStore } from "vuex";

export default createStore({
  state: {
    nights: [],
    clubs: [],
  },
  mutations: {
    //set any state property
    PUSH_STATE(state, { key, value }) {
      state[key].push(value);
    },
  },
  actions: {
    addNights({ commit }, _nights) {
      for (let _night of _nights) {
        commit("PUSH_STATE", { key: "nights", value: _night });
      }
    },
  },
  modules: {},
});
