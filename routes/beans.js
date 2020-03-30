const { Router } = require("express");
const router = new Router();
const fs = require("fs");
const uuid = require("uuid-random");
const { generateOrderNr, generateETA } = require("../utils/utils");
const { createOrder } = require("../models/Order");

router.get("/", async (req, res) => {
  const menu = fs.createReadStream("data/menu.json");
  menu.pipe(res);
});

router.post("/", async (req, res) => {
  const order = {
    eta: generateETA(),
    orderNr: generateOrderNr()
  };

  setTimeout(() => {
    res.send(order);
  }, 2000);
});

router.post("/new-order", async (req, res) => {
  try {
    const order = await createOrder(req.body);
    res.send(order);
  } catch (error) {
    res.status(401).json({ message: error });
  }
});

router.get("/key", (req, res) => {
  const key = {
    key: uuid()
  };
  res.send(JSON.stringify(key));
});

module.exports = router;
