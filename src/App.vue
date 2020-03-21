<template>
  <div id="app">
    <Cart />
    <back-drop />
    <Hamburger />
    <pop-up-menu />
    <router-view />
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger.vue";
import PopUpMenu from "@/components/PopUpMenu.vue";
import Cart from "@/components/Cart.vue";
import BackDrop from "@/components/BackDrop.vue";

export default {
  components: {
    Hamburger,
    PopUpMenu,
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