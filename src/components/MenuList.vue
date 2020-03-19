<template>
  <div>
    <ul class="menu-list">
      <li v-for="menuItem in menuItems" :key="menuItem.id">
        <div class="menu-item">
          <i class="fas fa-plus-circle"></i>
          <section>
            <span class="name">{{ menuItem.title }}</span>
            <span class="desc">{{ menuItem.desc }}</span>
          </section>
          <span class="price">{{ menuItem.price }} kr</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import MenuServices from "../api/MenuServices";
export default {
  name: "MenuList",
  data() {
    return {
      menuItems: {}
    };
  },
  created() {
    return MenuServices.getMenuItems().then(res => {
      this.menuItems = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.menu-list {
  width: 100%;
  margin: 2rem 0;
  padding: 0 1rem;
  list-style: none;

  .menu-item {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    section {
      display: flex;
      flex-flow: column;
      margin-right: auto;
    }

    i {
      color: #000;
      font-size: 1.7rem;
      margin-right: 0.5rem;
    }

    .name {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .price {
      font-size: 1.2rem;
      font-weight: bold;
    }

    &:last-child {
      margin-bottom: 2rem;
    }
  }

  .desc {
    font-size: 0.7rem;
    font-weight: 100;
    font-style: italic;
  }
}
</style>
