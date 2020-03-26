<template>
  <div class="back-drop" :class="{'toggle-cart' : cartOpen}" @click="toggleCart"></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BackDrop",
  computed: {
    ...mapState(["cartOpen"])
  },
  methods: {
    toggleCart() {
      this.$store.dispatch("toggleCart");
    }
  }
};
</script>

<style lang="scss" scoped>
.back-drop {
  transition: 0.3s;
  &.toggle-cart {
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(#000, 0.7);
  }
}
</style>