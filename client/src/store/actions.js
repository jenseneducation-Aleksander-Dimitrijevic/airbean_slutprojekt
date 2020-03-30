import ProductServices from "@/api/ProductServices";

export default {
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
  async createOrder(context, orderHistory) {
    context.commit("SET_LOADER");
    const order = await ProductServices.createNewOrder();
    context.commit("SET_LOADER");
    context.commit("CREATE_ORDER", order);
    ProductServices.postOrders(orderHistory);
  },
  setNewUser(context, id) {
    context.commit("SET_NEW_USER", id);
  },
  checkLocalStorage(context) {
    context.commit("CHECK_LOCALSTORAGE");
  }
};
