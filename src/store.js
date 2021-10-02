import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // data 역할
    allUsers: [
      {
        userId: "hoza123",
        password: "123",
        name: "Hoza",
        address: "Seoul",
        src: "https://goo.gl/oqLfJR",
      },
      {
        userId: "max123",
        password: "456",
        name: "Max",
        address: "Berlin",
        src: "https://goo.gl/Ksk9B9",
      },
      {
        userId: "lego123",
        password: "789",
        name: "Lego",
        address: "Busan",
        src: "https://goo.gl/x7SpCD",
      },
    ],
  },
  getters: {
    // computed 역할 (state를 명시해줘야함)
    allUsersCount: function(state) {
      return state.allUsers.length;
    },
    countOfSeoul: (state) => {
      let count = 0;
      state.allUsers.forEach((user) => {
        if (user.address === "Seoul") count++;
      });
      return count;
    },
    percentOfSeoul: (state, getters) => {
      // getters를 명시해야 사용 가능
      return Math.round((getters.countOfSeoul / getters.allUsersCount) * 100);
    },
  },
  mutations: {
    // state를 변화
    addUsers: (state, payload) => {
      state.allUsers.push(payload);
    },
  },
  actions: {
    // state를 변화시키기 위한 비즈니스 로직 (비동기 방식으로 서버와 통신(중복 검사, 비밀번호 검사))
    addUsers: ({ commit }, payload) => {
      // context, payload
      // { commit }, payload
      commit("addUsers", payload);
    },
  },
});
