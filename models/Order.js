const Datastore = require("nedb-promise");
const orders = new Datastore({ filename: "./data/orders.db", autoload: true });

module.exports = {
  async createOrder(body) {
    const order = {
      orderNumber: body.orderNumber,
      timeStamp: Date.now(),
      Items: body.Items,
      totalValue: body.Items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0)
    };
    return await orders.insert(order);
  }
};
