<template>
  <div id="app">
    <Hamburger />
    <router-view />
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger.vue";

export default {
  components: {
    Hamburger
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