<template>
  <div class="heading">
    <h1>{{ heading }}</h1>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    heading: String
  }
};
</script>

<style lang="scss" scoped>
.heading {
  margin: 1rem 0;
  text-align: center;

  h1 {
    font-size: 3rem;
  }
}
</style>