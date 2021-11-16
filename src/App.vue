<template>
  <div id="app">
    <main-coach-nav-bar
      :colorOnScroll="200"
      :theme="theme"
    />
    <div class="wrapper">
      <main-coach :theme="theme" />
    </div>
    <button @click="changeColor">Change Color</button>
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
    changeColor(){
      this.i = this.i+1;
      if( this.i > 2){
        this.i = 0;
      }
      switch(this.i){
        case 0 :
          this.theme = "primary";
          break;
        case 1 :
          this.theme = "default";
          break;
        case 2 :
          this.theme = "info";
          break;
      }
    }

  }
  
};
</script>
