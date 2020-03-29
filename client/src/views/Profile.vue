<template>
  <div>
    <div class="profile-page" v-if="typeof registered !== 'undefined'">
      <Banner :imgUrl="require('@/assets/img/graphics-header.svg')" />
      <Register />
      <router-view />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Register from "@/components/Register.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Banner,
    Register
  },
  computed: {
    ...mapState(["registered"]),
    ...mapActions(["checkLocalStorage"])
  },
  mounted() {
    this.checkLocalStorage;
  }
};
</script>

<style lang="scss">
.profile-page {
  height: 100vh;
  overflow: auto;
  background: #2e2925;
}
</style>