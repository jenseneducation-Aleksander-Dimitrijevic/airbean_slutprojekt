import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    ADD_NEW_ITEM(state, newItem) {
      state.items.push(newItem);
    }
  },
  actions: {
    addNewItem(context, newItem) {
      context.commit("ADD_NEW_ITEM", newItem);
    }
  }
});
