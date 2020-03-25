<template>
  <div>
    <ul class="menu-list">
      <li v-for="item in listItems" :key="item.id">
        <div class="menu-item">
          <i class="fas fa-plus-circle" @click="addNewItem(item)"></i>
          <section>
            <span class="name">{{ item.title }}</span>
            <span class="desc">{{ item.desc }}</span>
          </section>
          <span class="price">{{ item.price }} kr</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MenuList",
  data() {
    return {
      listItems: {}
    };
  },
  computed: {
    ...mapState(["items", "menuItems"])
  },
  async created() {
    this.listItems = await this.menuItems;
  },
  methods: {
    addNewItem(item) {
      const menuItem = this.items.find(coffe => coffe.title == item.title);
      if (menuItem == null) {
        this.$store.dispatch("addNewItem", {
          title: item.title,
          price: item.price,
          count: 1
        });
      } else {
        menuItem.count += 1;
      }
    }
  }
};
</script>

<style lang="scss">
.menu-list {
  width: 100%;
  margin: 2rem 0;
  padding: 0 1rem;
  list-style: none;

  .items {
    display: block;
  }

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
      background: #fff;
      border-radius: 50%;
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
