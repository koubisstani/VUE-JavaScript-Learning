import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 0,  // Define a simple state
  },
  mutations: {
    increment(state) {
      state.count++;  // state increment
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');  //  mutations
    },
  },
  getters: {
    getCount(state) {
      return state.count;  // Getting Status Values
    },
  },
});

export default store;
