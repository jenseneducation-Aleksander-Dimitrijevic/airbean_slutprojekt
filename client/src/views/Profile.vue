<template>
  <div class="profile-page">
    <Banner :imgUrl="require('@/assets/img/graphics-header.svg')" />
    <Register />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Register from "@/components/Register.vue";
export default {
  components: {
    Banner,
    Register
  }
};
</script>

<style lang="scss" scoped>
.profile-page {
  height: 100vh;
  background: #2e2925;
}
</style>