<template>
  <div class="back-drop" :class="{'toggle-cart' : cartOpen}" @click="toggleCart"></div>
</template>

<script>
export default {
  name: "BackDrop",
  computed: {
    cartOpen() {
      return this.$store.state.cartOpen;
    }
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