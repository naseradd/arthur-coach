<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        
      </nav>
      <div class="copyright">
        &copy; {{ year }} , Arthur Rousseau.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name:'MainCoachFooter',
  props: {
    backgroundColor:{
      type: String,
      default: "black"
    },
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
