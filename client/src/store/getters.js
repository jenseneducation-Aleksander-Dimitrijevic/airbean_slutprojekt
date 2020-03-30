export default {
  getTotalPrice(state) {
    return state.items.reduce((sum, item) => {
      return sum + item.price * item.count;
    }, 0);
  },
  countItems(state) {
    return state.items.reduce((sum, item) => {
      return sum + item.count;
    }, 0);
  },
  getOrderHistory(state) {
    return state.orderHistory;
  }
};
