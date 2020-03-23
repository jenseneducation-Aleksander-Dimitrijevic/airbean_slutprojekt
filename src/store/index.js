import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    isOpen: false,
    cartOpen: false
  },
  getters: {
    getTotalPrice(state) {
      return state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    },
    countItems(state) {
      return state.items.reduce((sum, item) => {
        return sum + item.count;
      }, 0);
    }
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
    },
    ITEM_RESET(state) {
      state.items = []
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
    },
    itemReset(context) {
      context.commit('ITEM_RESET');
    }
  }
});
