<template>
  <div class="menu">
    <Banner />
    <Heading heading="Meny" />
    <MenuList />
    <Banner addClass="reverse" />
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
