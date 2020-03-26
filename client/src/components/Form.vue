<template>
  <form class="form-container">
    <div>
      <span>
        <label for="name">Namn</label>
      </span>
      <input type="text" placeholder="Chupa Cabra" />
    </div>
    <div>
      <span>
        <label for="email">Epost</label>
      </span>
      <input type="text" placeholder="chupa.cabra@zocom.se" />
    </div>
    <div id="radio-container">
      <input type="radio" />
      <label for="radio">GDPR Ok!</label>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form"
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

    input[type="radio"] {
      margin-right: 0.3rem;
      margin-top: 0.5rem;
    }
  }

  div {
    margin-bottom: 0.5rem;
  }
}
</style>