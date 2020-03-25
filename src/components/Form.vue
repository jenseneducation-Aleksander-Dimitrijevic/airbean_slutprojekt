<template>
  <form>
    <div>
      <label for="name">Namn</label>
      <input type="text" placeholder="John Doe" />
    </div>
    <div>
      <label for="email">Epost</label>
      <input type="text" placeholder="John.Doe@yourmail.com" />
    </div>
    <div>
      <input type="radio" />
      GDPR ok!
    </div>
  </form>
</template>

<script>
export default {
  name: "Form"
};
</script>

<style lang="scss" scoped>
</style>