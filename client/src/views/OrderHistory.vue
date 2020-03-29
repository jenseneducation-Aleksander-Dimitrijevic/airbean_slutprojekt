<template>
  <div class="profile-page">
    <Banner :imgUrl="require('@/assets/img/graphics-header.svg')" />
    <div class="user-info">
      <img :src="require('@/assets/img/person-placeholder.png')" alt="portrait" />
      <h1>{{ registered.name }}</h1>
      <span class="email">{{ registered.email }}</span>
    </div>
    <div class="order-details">
      <h2>Orderhistorik</h2>
      <ul v-for="order in orderHistory" :key="order.id">
        <li>
          <div>
            <span class="order-nr">#{{ order.order.orderNr }}</span>
            <span>total ordersumma</span>
          </div>
          <div>
            <span class="date">20/10/03</span>
            <span class="item-cost">231 kr</span>
          </div>
        </li>
      </ul>
      <div class="summary">
        <span>Totalt spenderat</span>
        <span class="total-amount">1234 kr</span>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import { mapState } from "vuex";
export default {
  components: {
    Banner
  },
  computed: {
    ...mapState(["registered", "orderHistory"])
  }
};
</script>

<style lang="scss" scoped>
.user-info {
  color: #ddd;
  text-align: center;
  img {
    width: 130px;
    display: block;
    margin: 4rem auto 1rem auto;
  }
  h1 {
    font-weight: 100;
    font-size: 1.6rem;
  }
  .email {
    font-size: 0.9rem;
  }
}

.order-details {
  width: 90%;
  color: #fff;
  margin: 4rem auto;

  h2 {
    font-weight: 100;
  }

  ul {
    width: 100%;
    list-style: none;

    li {
      color: #777;
      display: flex;
      margin: 1rem 0 2rem 0;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #999;
    }

    li > div {
      display: flex;
      flex-flow: column;

      .order-nr {
        color: #ddd;
        font-weight: 200;
      }

      &:nth-child(2) {
        text-align: right;
      }

      span {
        margin-bottom: 0.5rem;
      }
    }
  }

  .summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>