<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "scss/fonts";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: $poppins-font;
}
</style>