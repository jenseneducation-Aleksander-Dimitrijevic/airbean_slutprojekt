<template>
  <div class="navbar" :class="{'toggle-menu' : isOpen, 'set-fixed': cartOpen}">
    <div class="nav-icon" @click="toggleMenu">
      <div class="lines">
        <div />
        <div />
        <div />
      </div>
    </div>

    <i class="fab fa-opencart cart-btn" @click="toggleCart"></i>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.dispatch("toggleMenu");
    },
    toggleCart() {
      this.$store.dispatch("toggleCart");
    }
  },
  computed: {
    isOpen() {
      return this.$store.state.isOpen;
    },
    cartOpen() {
      return this.$store.state.cartOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 1rem;
  position: absolute;
  align-items: center;
  justify-content: space-between;

  i.cart-btn {
    width: 55px;
    height: 55px;
    display: flex;
    color: #fff;
    border-radius: 50%;
    align-items: center;
    background: #2e2925;
    justify-content: center;
  }

  .nav-icon {
    z-index: 3;
    width: 50px;
    height: 50px;
    display: flex;
    padding: 10px;
    transition: 0.5s;
    border-radius: 50%;
    background: #fff;
    align-items: center;
    justify-content: center;

    .lines > div {
      width: 25px;
      height: 2px;
      margin: 6px 0;
      transition: 0.3s;
      background: #000;
    }
  }

  &.toggle-menu {
    .nav-icon > .lines > div {
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 6px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -6px);
      }
    }
  }

  &.set-fixed {
    position: fixed;
  }
}
</style>