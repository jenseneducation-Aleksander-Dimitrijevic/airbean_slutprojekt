<template>
  <div class="register-cart" v-if="typeof registered.id === 'undefined' && redirect">
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
    <Form v-if="typeof registered.id === 'undefined'" />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import { mapState } from "vuex";
export default {
  components: {
    Form
  },
  computed: {
    ...mapState(["registered"])
  },

  methods: {
    redirect() {
      const path = "/profile";
      if (this.$route.path !== "/profile/:id") this.$router.push(path);
    }
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
}
</style>