import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false
});

export default {
  getMenuItems() {
    return apiClient.get("/menu");
  }
};
