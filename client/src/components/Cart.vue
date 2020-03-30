<template>
  <div class="cart" :class="{'animated fadeIn' : cartOpen}">
    <h1>Din beställning</h1>

    <ul class="menu-list">
      <li v-for="(item,index) in items" :key="index">
        <div class="menu-item" v-show="item.count">
          <section>
            <span class="name">{{ item.title }}</span>
            <span>{{ item.price * item.count }} kr</span>
          </section>
          <p class="item-selected">
            <i class="fas fa-angle-up" @click="item.count++"></i>
            {{ item.count }}
            <i class="fas fa-angle-down" @click="item.count--"></i>
          </p>
        </div>
      </li>
    </ul>

    <h2 v-show="getTotalPrice">
      Totalt:
      <p>{{ getTotalPrice }} kr</p>
    </h2>
    <span v-show="getTotalPrice">inkl moms + drönarleverans</span>
    <span v-show="!getTotalPrice">Inget i korgen</span>

    <router-link @click.native="itemReset" :to="{name: 'status'}">
      <button
        @click="[createOrder(), persistOrder()]"
        class="order-btn"
        v-show="getTotalPrice"
      >Take my money!</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState(["cartOpen", "items"]),
    ...mapGetters(["getTotalPrice"])
  },
  methods: {
    ...mapActions(["createOrder", "itemReset", "persistOrder"])
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
  position: fixed;
  overflow-y: auto;
  background: #fff;
  border-radius: 5px;
  visibility: hidden;
  box-shadow: 0 0 30px rgba(#000, 0.5);

  .menu-list {
    padding: 0;

    .name {
      font-weight: 100;
      font-style: initial;
    }

    p.item-selected {
      display: flex;
      flex-flow: column;
      text-align: left;
      font-size: 1.1rem;

      i {
        font-size: 1.2rem;
      }
    }
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
    font-size: 1.8rem;
    text-align: center;
  }

  h2 {
    width: 100%;
    display: flex;
    font-size: 1.3rem;
    justify-content: space-between;
  }
  span {
    font-size: 0.8rem;
    font-style: italic;
  }

  .order-btn {
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    margin: 2rem auto;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 40px;
    background: #2e2925;
    text-transform: uppercase;
  }

  &.animated.fadeIn {
    visibility: visible;
    animation-duration: 0.2s;
  }
}
</style>