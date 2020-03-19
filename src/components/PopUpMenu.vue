<template>
  <div id="pop-up">
    <img class="close-button" :src="require('@/assets/img/close.svg')" alt="logo" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#pop-up {
  display: flex;
  position: absolute;
  background: #fff;
  border-radius: 50%;

  .close-button {
    padding: 10px;
    margin: 5px;
  }
}
</style>