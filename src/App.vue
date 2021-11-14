<template>
  <div id="app">
    <main-coach-nav-bar
      :colorOnScroll="200"
    />
    <div class="wrapper">
      <main-coach />
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
  
};
</script>
