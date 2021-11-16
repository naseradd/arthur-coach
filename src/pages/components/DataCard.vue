<template>
  <div class="peoplecard">
      <card style="width: 20rem;">
      <div>
        <i class="now-ui-icons sport_trophy card-img-top large" style="font-size: 35px; text-align: center;" ></i>
        <h4 class="card-title text-center">{{title}}</h4>
        <h5 class="card-title text-center"><b>{{price}}</b>{{unite}}</h5>
        <hr style="height:2px; width:60%; border-width:0; color:red; background-color:black">
        <ul class="text-left">
          <li v-for="item in pro" :key="item">
             <p class="card-text">{{item}}</p>
          </li>
        </ul>
        <br/>
        <h5 class=""><b>{{bonus_description}}</b></h5>
        <ul>
          <li v-for="item in bonus" :key="item">
            <p class="card-text">{{item}}</p>
          </li>
        </ul>
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
      title:{
          type: String,
          default: "",
      },
      bonus_description:{
          type: String,
          default: "",
      },
      pro:{
          type: Array,
          default: null,
      },
      bonus:{
          type: Array,
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
