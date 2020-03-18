<template>
  <div class="menu">
    <div
      class="top-image"
      :style="{ backgroundImage: 'url(' + require('@/assets/img/graphics-header.svg') + ')' }"
    ></div>
    <Heading heading="Meny" />
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
export default {
  name: "Menu",
  components: {
    Heading
  }
};
</script>

<style lang="scss" scoped>
.top-image {
  width: 100%;
  height: 80px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>