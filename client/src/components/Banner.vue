<template>
  <div class="banner" :style="{
      backgroundImage: `url(${imgUrl})`
    }"></div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    imgUrl: String
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 90px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
