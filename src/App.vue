<template>
  <div id="app">
    <Cart />
    <back-drop />
    <Navbar />
    <Sidemenu />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidemenu from "@/components/Sidemenu.vue";
import Cart from "@/components/Cart.vue";
import BackDrop from "@/components/BackDrop.vue";

export default {
  components: {
    Navbar,
    Sidemenu,
    Cart,
    BackDrop
  }
};
</script>

<style lang="scss">
@import "scss/fonts";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f3e4e1;
  font-family: $poppins-font;
}
</style>