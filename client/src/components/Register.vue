<template>
  <div class="register-cart">
    <div class="cart-text">
      <img :src="require('@/assets/img/airbeanicon.jpg')" alt="logo" />
      <h1>
        Välkommen till
        AirBean-familjen!
      </h1>
      <h6>
        Genom att skapa ett konto nedan kan
        <span>du spara och se din orderhistorik.</span>
      </h6>
    </div>
    <Form />
    <router-link :to="{name: 'profile'}">
      <button class="goRegister">Brew me a cup!</button>
    </router-link>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  components: {
    Form
  }
};
</script>

<style lang="scss" scoped>
.register-cart {
  left: -50%;
  right: -50%;
  top: 5rem;
  z-index: 1;
  width: 90%;
  height: 80%;
  margin: 0 auto 2rem auto;
  padding: 20px;
  overflow-y: auto;
  background: #f3e4e1;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(#000, 0.5);

  .cart-text {
    text-align: center;
    padding-bottom: 10px;
  }

  img {
    height: 42px;
    width: 60px;
  }

  h6 {
    font-weight: 100;
    font-size: 0.9rem;

    span {
      display: block;
    }
  }

  .goRegister {
    width: 100%;
    border: none;
    outline: none;
    padding: 13px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    margin: 2rem auto;
    font-size: 1.5rem;
    margin-top: 0.7rem;
    text-align: center;
    border-radius: 40px;
    background: #2e2925;
  }
}
</style>