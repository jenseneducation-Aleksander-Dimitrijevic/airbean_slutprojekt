<template>
  <form class="form-container" @submit.prevent="register">
    <span v-if="error" :style="{color: 'red'}">{{ errMsg }}</span>
    <div>
      <span>
        <label for="name">Namn</label>
      </span>
      <input type="text" placeholder="Chupa Cabra" v-model="name" />
    </div>
    <div>
      <span>
        <label for="email">Epost</label>
      </span>
      <input type="text" placeholder="chupa.cabra@zocom.se" v-model="email" />
    </div>
    <div id="radio-container">
      <input id="radio" type="checkbox" @change="marked = !marked" />
      <label for="radio">GDPR Ok!</label>
    </div>
    <button class="goRegister">Brew me a cup!</button>
  </form>
</template>

<script>
import ProductServices from "@/api/ProductServices";
export default {
  name: "Form",

  data() {
    return {
      name: "",
      email: "",
      marked: false,
      error: false,
      errMsg: ""
    };
  },

  methods: {
    async register() {
      if (this.name == "" || this.email == "" || this.marked == false) {
        this.errMsg = "You missed one or more detail(s)";
        this.error = true;
        return;
      } else {
        const uuid = {
          id: await ProductServices.getUUID().then(res => res.data.key),
          name: this.name,
          email: this.email
        };
        this.$store.dispatch("setNewUser", uuid);
        this.$router.push({ name: "orderhistory", params: { id: uuid.id } });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  input[type="text"] {
    width: 100%;
    margin: 2px auto;
    font-size: 0.9rem;
    border-radius: 5px;
    background: transparent;
    border: 1px solid #333;
    padding: 13px 8px 13px 8px;
  }

  label {
    font-size: 0.8rem;
  }

  span {
    display: block;
  }

  #radio-container {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      margin-right: 0.5rem;
    }
  }

  div {
    margin-bottom: 0.5rem;
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