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
  },
  mutations: {},
  actions: {},
});
