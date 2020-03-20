<template>
  <div id="app">
    <Cart />
    <Hamburger />
    <pop-up-menu />
    <router-view />
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger.vue";
import PopUpMenu from "@/components/PopUpMenu.vue";
import Cart from "@/components/Cart.vue";

export default {
  components: {
    Hamburger,
    PopUpMenu,
    Cart
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
  background-color: #eee;
  font-family: $poppins-font;
}
</style>