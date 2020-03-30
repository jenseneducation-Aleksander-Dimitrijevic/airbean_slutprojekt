import ProductServices from "../api/ProductServices";

export default {
  items: [],
  newOrder: {},
  cartOpen: false,
  isLoading: false,
  sideMenuOpen: false,
  menuItems: ProductServices.getMenuItems().then(res => res.data),

  registered: {},
  orderHistory: []
};
