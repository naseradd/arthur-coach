<template>
  <navbar position="fixed" :type="theme" :transparent="transparent" :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto">
    <template>
      <img src="img/logo_AR_sek_train_white.png" alt="Thumbnail Image" class="rounded logo" />
    </template>
    <template slot="navbar-menu">
      <li class="nav-item"><b>
        <a class="nav-link" target="_blank" @click="$emit('GoToHomePage')">
          <p>{{header_about_us}}</p>
        </a>
        </b>
      </li>
      <li class="nav-item"><b>
        <a class="nav-link" target="_blank" @click="$emit('GoToGymMassagePage')">
          <p>{{header_tarification}}</p>
        </a>
        </b>
      </li>
      <li class="nav-item"><b>
        <a class="nav-link" target="_blank" @click="$emit('GoToTemoignPage')">
          <p>{{header_temoin}}</p>
        </a>
        </b>
      </li>
      <li class="nav-item">
        <a class="nav-link" rel="tooltip" title="Follow me on Instagram" data-placement="bottom" href="https://www.instagram.com/sekk.fitness/?hl=fr" target="_blank" >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
  import {
    DropDown,
    Navbar,
    NavLink
  } from '@/components';
  import {
    Popover
  } from 'element-ui';
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number,
      theme: String,
    },
    components: {
      Navbar,
      [Popover.name]: Popover
    },
    data() {
      return {
        headerName: "Arthur Rousseau",
        header_about_us: "À propos",
        header_tarification: "Forfaits",
        header_temoin: "Témoignages",
      };
    },
  };
</script>

<style scoped>
  .logo {
    width:70px;
  }
</style>