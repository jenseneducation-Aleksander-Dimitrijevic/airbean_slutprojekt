import Vue from "vue";
import Vuex from "vuex";
import MenuServices from "../api/MenuServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    newOrder: {},
    cartOpen: false,
    isLoading: false,
    sideMenuOpen: false,
    menuItems: MenuServices.getMenuItems().then(res => res.data),

    registered: {},
    orderHistory: []
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
      state.sideMenuOpen = !state.sideMenuOpen;
    },
    TOGGLE_CART(state) {
      state.cartOpen = !state.cartOpen;
    },
    ITEM_RESET(state) {
      state.items = [];
    },
    CREATE_ORDER(state, order) {
      state.newOrder = order.data;

      const user = {
        id: state.registered.id,
        order: state.newOrder
      };
      state.orderHistory.push(user);
      console.log(state.orderHistory);
      console.log(state.registered);
    },
    SET_LOADER(state) {
      state.isLoading = !state.isLoading;
    },
    SET_NEW_USER(state, id) {
      state.registered = id;
      const parsed = JSON.stringify(state.registered);
      localStorage.setItem("user", parsed);
    },
    CHECK_LOCALSTORAGE(state) {
      if (localStorage.getItem("user")) {
        try {
          state.registered = JSON.parse(localStorage.getItem("user"));
        } catch (e) {
          localStorage.removeItem("user");
        }
      }
    }
  },
  actions: {
    addNewItem(context, newItem) {
      context.commit("ADD_NEW_ITEM", newItem);
    },
    toggleMenu(context) {
      context.commit("TOGGLE_MENU");
    },
    async toggleCart(context) {
      context.commit("TOGGLE_CART");
    },
    itemReset(context) {
      context.commit("ITEM_RESET");
      context.commit("TOGGLE_CART");
    },
    async createOrder(context) {
      context.commit("SET_LOADER");
      const order = await MenuServices.createNewOrder();
      context.commit("SET_LOADER");
      context.commit("CREATE_ORDER", order);
    },
    setNewUser(context, id) {
      context.commit("SET_NEW_USER", id);
    },
    checkLocalStorage(context) {
      context.commit("CHECK_LOCALSTORAGE");
    }
  }
});
