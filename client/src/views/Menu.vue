<template>
  <div class="menu">
    <Banner :imgUrl="require('@/assets/img/graphics-header.svg')" />
    <Heading heading="Meny" />
    <MenuList />
    <Banner :imgUrl="require('@/assets/img/graphics-footer.svg')" />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Heading from "@/components/Heading.vue";
import MenuList from "@/components/MenuList.vue";
export default {
  name: "Menu",
  components: {
    Heading,
    Banner,
    MenuList
  }
};
</script>

<style lang="scss"></style>
