<template>
  <div class="peoplecard">
      <card style="width: 15rem;">
      <i class="now-ui-icons sport_trophy card-img-top large" style="font-size: 50px; text-align: center;" ></i>
      <div>
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
 </card>
  </div>
</template>
<script>
import Card from '../../components/Cards/Card.vue';
export default {
  name: 'DataCard',
  bodyClass: 'data-card',
  components: {
    Card
  },
  props:{
      titre:{
          type: String,
          default: "",
      },
      description:{
          type: String,
          default: "",
      },
      pro:{
          type: Object,
          default: null,
      },
      cons:{
          type: Object,
          default: null,
      },
      price:{
          type: String,
          default: "",
      },
      unite:{
          type: String,
          default: "",
      }
  },
  data() {
    return {

    };
  }
};
</script>
<style>


</style>
