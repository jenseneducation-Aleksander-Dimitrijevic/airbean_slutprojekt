<template>
  <div id="navbar" @click="$router.push('/PopUpMenu')">
    <img class="navicon" :src="require('@/assets/img/navicon.svg')" alt="logo" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navbar {
  display: flex;
  position: absolute;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;

  .navicon {
    padding: 10px;
    margin: 5px;
    transition: 0.3s;

    &:hover {
      transform: scale(1.01);
      opacity: 0.7;
      background: rgb(235, 231, 231);
      border-radius: 30%;
    }
  }
}
</style>