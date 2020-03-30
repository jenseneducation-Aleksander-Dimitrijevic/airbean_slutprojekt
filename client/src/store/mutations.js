export default {
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

    const userOrder = {
      id: state.registered.id,
      items: state.newOrder
    };

    state.orderHistory.push(userOrder);
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
};
