<template>
  <div id="landing-page">
    <img :src="require('@/assets/img/airbean-landing.svg')" alt="logo" />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
#landing-page {
  background: url("~@/assets/img/intro-graphic-left.svg"),
    url("~@/assets/img/intro-graphic-right.svg");

  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position-x: -70px, 70px;
  background-color: #39846d;
}
</style>