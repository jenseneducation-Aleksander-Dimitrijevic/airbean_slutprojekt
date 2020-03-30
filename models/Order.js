const Datastore = require("nedb-promise");
const orders = new Datastore({ filename: "./data/orders.db", autoload: true });

module.exports = {
  async createOrder(generateOrderNr) {
    const order = {
      orderNumber: generateOrderNr,
      timeStamp: Date.now(),
      Items: [],
      totalValue: 1234
    };
    return await orders.insert(order);
  }
};
