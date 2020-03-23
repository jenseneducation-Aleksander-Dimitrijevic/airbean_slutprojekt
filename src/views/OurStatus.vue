<template>
  <div class="order-status">
    <h6>
      <span>Ordernummer</span> #12DV23F
    </h6>
    <img :src="require('@/assets/img/drone.svg')" alt="logo" />
    <h2>
      Din beställning
      <span>är på väg!</span>
    </h2>
    <h4>
      13
      <span>minuter</span>
    </h4>
    <router-link :to="{name: 'Home'}">
      <button class="goHome">Okay, cool!</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  background: #e5674e;
}

.order-status {
  text-align: center;
  height: 100vh;

  span {
    font-weight: 100;
  }

  h6 {
    opacity: 0.5;
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
  h2 {
    color: #fff;
    padding: 10px;
  }
  img {
    padding: 25px;
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