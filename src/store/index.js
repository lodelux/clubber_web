import { createStore } from "vuex";

export default createStore({
  state: {
    nights: [],
    clubs: [],
    CLUB_API:
      "https://us-central1-clubber-73cbd.cloudfunctions.net/webGetClubs",
    NIGHT_API:
      "https://us-central1-clubber-73cbd.cloudfunctions.net/webGetEvents",
  },
  mutations: {
    //set any state property
    PUSH_STATE(state, { key, value }) {
      state[key].push(value);
    },
  },
  actions: {
    addNights({ commit }, _nights) {
      for (let night of _nights) {
        night.type = "night";
        commit("PUSH_STATE", { key: "nights", value: night });
      }
    },
    addClubs({ commit }, _clubs) {
      for (let club of _clubs) {

        club.type = "club";
        commit("PUSH_STATE", { key: "clubs", value: club });
      }
    },
  },
  modules: {},
});
