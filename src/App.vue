<template>
  <div id="app">
    <main-coach-nav-bar
      :colorOnScroll="200"
      :theme="theme"
    />
    <div class="wrapper">
      <main-coach :theme="theme" />
    </div>
    <main-coach-footer :backgroundColor="'black'"/>
  </div>
</template>
<script>
import MainCoachFooter from './layout/MainCoachFooter.vue';
import MainCoachNavBar from './layout/MainCoachNavBar.vue';
import MainCoach from './pages/MainCoach.vue';
export default {
  components: { MainCoach, MainCoachNavBar, MainCoachFooter },
  data(){
    return{
      i: 0,
      theme: "default",
      // theme: "primary",
    }
  },
  methods:{
  }
  
};
</script>
