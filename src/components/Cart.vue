<template>
  <div class="cart" :class="{'animated fadeIn' : cartOpen}">
    <h1>Din beställning</h1>

    <ul class="menu-list">
      <li v-for="(item,index) in items" :key="index">
        <div class="menu-item">
          <section>
            <span class="name">{{ item.title }}</span>
            <span>{{ item.price * item.count }} kr</span>
          </section>
          <select v-model.number="item.count">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </li>
    </ul>

    <h2>Totalt: {{ getTotalPrice }} kr</h2>
    <span>inkl moms + drönarleverans</span>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cartOpen() {
      return this.$store.state.cartOpen;
    },
    items() {
      return this.$store.state.items;
    },
    getTotalPrice() {
      return this.$store.state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  left: -50%;
  right: -50%;
  top: 5rem;
  z-index: 1;
  width: 90%;
  height: 80%;
  margin: auto;
  padding: 20px;
  overflow: auto;
  position: fixed;
  background: #fff;
  border-radius: 5px;
  visibility: hidden;
  box-shadow: 0 0 30px rgba(#000, 0.5);

  .menu-list {
    padding: 0;
  }

  &::after {
    right: 13px;
    content: "";
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

  &.animated.fadeIn {
    visibility: visible;
    animation-duration: 0.2s;
  }
}
</style>