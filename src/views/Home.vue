<template>
  <div class="left-image-container">
    <h1>AIR BEAN</h1>
    <h6>D R O N E D E L I V E R E D C O F F E E</h6>
    <div class="right-image-container"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.left-image-container {
  background: url("~@/assets/img/intro-graphic-left.svg") no-repeat top/50%;
  height: 100vh;
  width: 100%;

  h1,
  h6 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
  }
}
</style>