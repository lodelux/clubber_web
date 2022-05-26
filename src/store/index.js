import { createStore } from "vuex";

export default createStore({
  state: {
    nights: [],
    clubs: [],
    isMobile: "",
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
    SET_ISMOBILE(state, value) {
      state["isMobile"] = value;
      console.log(state.isMobile);
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
    setIsMobile({ commit }) {
      let isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
          ? 1
          : 0;
      commit("SET_ISMOBILE", isMobile);
    },
  },
  modules: {},
});
