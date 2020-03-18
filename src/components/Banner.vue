<template>
  <div
    class="banner"
    :class="addClass"
    :style="{
      backgroundImage:
        'url(' + require('@/assets/img/graphics-header.svg') + ')'
    }"
  ></div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    addClass: String
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 90px;
  background-size: 100%;
  background-repeat: repeat-x;
  background-position: center;

  &.reverse {
    transform: scaleY(-1);
    margin-top: 4rem;
  }
}
</style>
