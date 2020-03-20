import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    isOpen: false,
    cartOpen: false
  },
  mutations: {
    ADD_NEW_ITEM(state, newItem) {
      state.items.push(newItem);
    },
    TOGGLE_MENU(state) {
      state.isOpen = !state.isOpen;
    },
    TOGGLE_CART(state) {
      state.cartOpen = !state.cartOpen;
    }
  },
  actions: {
    addNewItem(context, newItem) {
      context.commit("ADD_NEW_ITEM", newItem);
    },
    toggleMenu(context) {
      context.commit("TOGGLE_MENU");
    },
    toggleCart(context) {
      context.commit("TOGGLE_CART");
    }
  }
});
