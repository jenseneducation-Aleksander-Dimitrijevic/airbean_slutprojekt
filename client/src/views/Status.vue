<template>
  <div>
    <div class="order-status">
      <h6>
        <span>Ordernummer</span>
        {{ newOrder.orderNr }}
      </h6>
      <img :class="{move : isLoading}" :src="require('@/assets/img/drone.svg')" alt="logo" />
      <h2>
        Din beställning
        <span>är på väg!</span>
      </h2>
      <h4>
        {{ newOrder.eta }}
        <span>minuter</span>
      </h4>
      <router-link :to="{name: 'Home'}">
        <button class="goHome">Okay, cool!</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["newOrder", "isLoading"])
  }
};
</script>

<style lang="scss" scoped>
.order-status {
  height: 100vh;
  display: flex;
  flex-flow: column;
  text-align: center;
  background: #e5674e;
  justify-content: center;

  span {
    font-weight: 100;
  }

  h6 {
    opacity: 0.6;
    font-size: 1rem;
    font-weight: bold;

    span {
      opacity: 0.8;
    }
  }

  h2 {
    font-size: 1.8rem;
  }

  h2 > span {
    display: block;
  }

  h6,
  h5,
  h4,
  h2,
  h1 {
    color: #fff;
    padding: 10px;
  }
  img {
    padding: 25px;
    position: relative;
    background: transparent;

    &.move {
      animation: 1s move linear infinite;

      @keyframes move {
        0% {
          top: 0;
        }
        25% {
          top: 15px;
        }
        50% {
          top: 20px;
        }
        75% {
          top: 15px;
        }
        100% {
          top: 0;
        }
      }
    }
  }
  .goHome {
    width: 55%;
    border: none;
    padding: 20px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    margin: 2rem auto;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 40px;
    background: #fff;
  }
}
</style>