<template>
  <navbar position="fixed" :type="theme" :transparent="transparent" :color-on-scroll="colorOnScroll" 
    menu-classes="ml-auto">
    <div class="menu-navbar">
      <img src="img/logo_AR_sek_train_white.png" alt="Thumbnail Image" class="rounded logo" />
    </div>
    <div class="menu-navbar-button">
      <button 
        type="button" 
        class= "bnt btn-round btn-sm"
        v-bind:class="{'btn-secondary': activeBtn == 0}"
        @click="setActiveAndEmit(0,'GoToHomePage')"
      >
        <b>{{header_about_us}}</b>
      </button>
      <button 
        type="button" 
        class= "bnt btn-round btn-sm"
        v-bind:class="{'btn-secondary': activeBtn == 1}"
        @click="setActiveAndEmit(1,'GoToGymMassagePage')"
      >
        <b>{{header_tarification}}</b>
      </button>
      <button 
        type="button" 
        class= "bnt btn-round btn-sm"
        v-bind:class="{'btn-secondary': activeBtn == 2}"
        @click="setActiveAndEmit(2,'GoToTemoignPage')"
      >
        <b>{{header_temoin}}</b>
      </button>
    </div>
    
      <!-- <li class="nav-item"><b>
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
      </li> -->
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
  import {getImgData} from '../assets/websiteData';

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
        activeBtn : 0
      };
    },
    methods:{
      setActiveAndEmit(index,emitstr){
        // for (let index = 0; index < this.isActive.length; index++) {
        //   this.isActive[index] = false;
        // }
        this.activeBtn = index;
        console.log(this.isActive)
        this.$emit(emitstr)
      }

    }
  };
</script>

<style scoped>
  .logo {
    width:70px;
  }
  .btn-sm{
    font-size: 10px;
    margin-left: 5px;
  }
</style>