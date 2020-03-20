<template>
  <div class="cart" :class="{'animated bounceIn' : cartOpen}">
    <h1>Din beställning</h1>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cartOpen() {
      return this.$store.state.cartOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  top: 5rem;
  right: 0;
  left: 1rem;
  z-index: 1;
  width: 90%;
  height: 80%;
  padding: 20px;
  position: fixed;
  background: #fff;
  border-radius: 5px;
  visibility: hidden;
  box-shadow: 0 0 30px rgba(#000, 0.5);

  &::after {
    right: 13px;
    content: " ";
    bottom: 100%;
    margin-left: -5px;
    position: absolute;
    border-width: 15px;
    border-style: solid;
    border-color: transparent transparent #fff transparent;
  }

  h1 {
    font-weight: 100;
    font-size: 1.5rem;
    text-align: center;
  }

  &.animated.bounceIn {
    visibility: visible;
  }
}
</style>