<template>
  <div class="side-menu" :class="{'toggle-menu' : sideMenuOpen}">
    <router-link
      class="home-btn"
      :class="{'animated fadeInUp' : sideMenuOpen}"
      to="/"
      @click.native="toggleMenu"
    >
      <i class="fas fa-home"></i>
    </router-link>
    <ul>
      <li>
        <router-link class="b-bottom" to="/menu" @click.native="toggleMenu">Meny</router-link>
      </li>
      <li>
        <router-link class="b-bottom" to="/our-coffee" @click.native="toggleMenu">Vårt kaffe</router-link>
      </li>
      <li>
        <router-link
          v-if="typeof registered.id === 'undefined'"
          to="/profile"
          class="b-bottom"
          @click.native="toggleMenu"
        >Min profil</router-link>

        <!-- Refactor -->
        <router-link
          v-else-if="typeof registered.id !== 'undefined'"
          :to="{name:'orderhistory', params: {id: registered.id}}"
          class="b-bottom"
          @click.native="toggleMenu"
          prevent
        >Min profil</router-link>
      </li>
      <li>
        <router-link to="/status" @click.native="toggleMenu">Orderstatus</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["sideMenuOpen", "registered"])
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch("toggleMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
.side-menu {
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  transition: 0.5s;
  align-items: center;
  background: #2e2925;
  justify-content: center;
  transform: translateX(-100%);

  a.home-btn {
    top: 1.7rem;
    right: 1rem;
    color: #fff;
    cursor: pointer;
    font-size: 1.3rem;
    position: absolute;
    text-decoration: none;
    animation-delay: 0.2s;
  }

  ul {
    list-style: none;

    a {
      color: #fff;
      display: block;
      padding: 10px 0;
      font-size: 2rem;
      position: relative;
      text-align: center;
      text-decoration: none;

      &.b-bottom {
        &::after {
          content: "";
          width: 50px;
          height: 1px;
          bottom: 2px;
          left: 0;
          right: 0;
          margin: auto;
          position: absolute;
          background: lighten(#2e2925, 10%);
        }
      }
    }
  }

  &.toggle-menu {
    transform: translateX(0);
  }
}
</style>