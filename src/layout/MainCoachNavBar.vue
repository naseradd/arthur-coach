<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <h6>{{headerName}}</h6>
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
          title="Follow me on Twitter"
          data-placement="bottom"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like me on Facebook"
          data-placement="bottom"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
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
    colorOnScroll: Number
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

<style scoped></style>
