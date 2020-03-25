<template>
  <div class="navbar" :class="{'toggle-menu' : sideMenuOpen}">
    <div class="nav-icon" @click="toggleMenu">
      <div class="lines">
        <div />
        <div />
        <div />
      </div>
    </div>

    <i class="fab fa-opencart cart-btn" @click="toggleCart">
      <span v-show="countItems" class="item-count">{{ countItems }}</span>
    </i>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
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
    ...mapState(["sideMenuOpen", "cartOpen"]),
    ...mapGetters(["countItems"])
  },
  watch: {
    countItems() {
      const itemCount = document.querySelector(".item-count");
      itemCount.classList.add("animated", "bounceIn");
      setTimeout(() => {
        itemCount.classList.remove("animated", "bounceIn");
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  padding: 0 1rem;
  position: absolute;
  align-items: center;
  justify-content: space-between;

  .nav-icon {
    width: 50px;
    height: 50px;
    z-index: 3;
    display: flex;
    padding: 10px;
    transition: 0.5s;
    border-radius: 50%;
    background: #fff;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(#000, 0.3);

    .lines > div {
      width: 25px;
      height: 2px;
      margin: 6px 0;
      transition: 0.3s;
      background: #000;
    }
  }

  i.cart-btn {
    width: 55px;
    height: 55px;
    display: flex;
    color: #fff;
    z-index: 1;
    position: relative;
    border-radius: 50%;
    align-items: center;
    background: #2e2925;
    justify-content: center;
    box-shadow: 0 0 10px rgba(#000, 0.3);

    span.item-count {
      top: -5px;
      right: -5px;
      width: 10px;
      height: 10px;
      padding: 12px;
      display: flex;
      border-radius: 50%;
      position: absolute;
      align-items: center;
      justify-content: center;
      background: rgb(236, 95, 39);
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
}
</style>