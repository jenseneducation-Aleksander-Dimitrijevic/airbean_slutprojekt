<template>
  <div class="home-container">
    <div
      class="card-image"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/airbean-landing.svg') + ')' }"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home-container {
  background: url("~@/assets/img/graphics-header.svg") no-repeat center/100%;
  height: 100vh;
  width: 100%;

  .card-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>