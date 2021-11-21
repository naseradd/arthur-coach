<template>
  <navbar
    position="fixed"
    :type="theme"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <img
        src="img/logo_ar.jpg"
        alt="Thumbnail Image"
        class="rounded-circle logo"
      />
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          target="_blank"
        >
          <p>{{header_about_us}}</p>
        </a>
      </li><li class="nav-item">
        <a
          class="nav-link"
          target="_blank"
        >
          <p>{{header_contact}}</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          target="_blank"
        >
          <p>{{header_tarification}}</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow me on Instagram"
          data-placement="bottom"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
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
      header_tarification: "Tarifs",
      header_contact: "Contact",
      touched: false
    };
  },
};
</script>

<style scoped>
.logo{
  width: 60px;
}
</style>
