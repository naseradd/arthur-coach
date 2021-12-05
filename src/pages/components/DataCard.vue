<template>
<div class="card-section">
      <img src="img/left-arrow.svg" class="img-arrow" @click="changeCard(1)"/>
      <div class="peoplecard" v-for="(item,index) in dataInfo" :key="index" v-show="index == indexToShow">
        <card style="width: 20rem;">
          <div>
            <h4 class="card-title text-center">{{item.title}}</h4>
            <h5 class="card-title text-center"><b>{{item.price}}</b>{{item.unite}}</h5>
            <hr style="height:2px; width:60%; border-width:0; color:red; background-color:black">
            <ul class="text-left">
              <li v-for="text in item.pro" :key="text">
                <p class="card-text">{{text}}</p>
              </li>
            </ul>
            <br />
            <h5 class=""><b>{{item.bonus_description}}</b></h5>
            <ul>
              <li v-for="text in item.bonus" :key="text">
                <p class="card-text">{{text}}</p>
              </li>
            </ul>
          </div>
        </card>
      </div>
      <img src="img/right-arrow.svg" class="img-arrow" @click="changeCard(-1)"/>
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
    props: ['dataInfo'],
    data() {
      return {
        indexToShow: 0,
      };
    },
    methods:{
      changeCard(value){
         this.indexToShow += value;
        if( this.indexToShow >= this.dataInfo.length ){
          this.indexToShow = 0;
        }
        else if( this.indexToShow < 0 ){
           this.indexToShow = this.dataInfo.length -1;
        }
      }
    }
  };
</script>
<style>
.card-section{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.img-arrow{
  height: 50px;
  margin: 20px;
}

</style>