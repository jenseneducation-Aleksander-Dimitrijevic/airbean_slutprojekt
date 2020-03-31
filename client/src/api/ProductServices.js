import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
  methods: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default {
  getMenuItems() {
    return apiClient.get("/api/beans");
  },
  createNewOrder() {
    return apiClient.post("/api/beans");
  },
  getUUID() {
    return apiClient.get("/api/beans/key");
  },
  postOrders(order) {
    return apiClient.post("/api/beans/new-order", order);
  }
};
