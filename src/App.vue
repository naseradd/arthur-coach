<template>
  <div id="app">
    <main-coach-nav-bar
      :colorOnScroll="200"
      :theme="theme"
      @GoToHomePage="GoToHomePage"
      @GoToGymMassagePage="GoToGymMassagePage"
      @GoToTemoignPage="GoToTemoignPage"
    />
    <div class="wrapper">
      <main-coach 
        :theme="theme" 
        :isHomePage="isHomePage"
        :isGymMassagePage="isGymMassagePage"
        :isTemoignPage="isTemoignPage"
      />
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
      isHomePage: true,
      isGymMassagePage: false,
      isTemoignPage: false,
    }
  },
  methods:{
    GoToHomePage(){
      this.isHomePage = true;
      this.isGymMassagePage = false;
      this.isTemoignPage = false;
    },
    GoToGymMassagePage(){
      this.isHomePage = false;
      this.isGymMassagePage = true;
      this.isTemoignPage = false;
    },
    GoToTemoignPage(){
      this.isHomePage = false;
      this.isGymMassagePage = false;
      this.isTemoignPage = true;
    },
  }
  
};
</script>
