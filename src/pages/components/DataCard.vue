<template>
<div class="card-section">
      <img src="img/left-arrow.svg" class="img-arrow" @click="changeCard(1)"/>
      <transition :name="slideIsLeft ? 'fade-in-left' : 'fade-in-right'" mode="out-in">
      <div class="peoplecard back" :key="indexToShow">
        <card style="width: 20rem;">
            <h4 class="card-title text-center">{{dataInfo[indexToShow].title}}</h4>
            <h5 class="card-title text-center"><b>{{dataInfo[indexToShow].price}}</b>{{dataInfo[indexToShow].unite}}</h5>
            <hr style="height:2px; width:60%; border-width:0; color:red; background-color:black">
            
            <a  v-if='dataInfo[indexToShow].description != ""' class="card-text" :href="dataInfo[indexToShow].link" target="_blank">  
              <i class="now-ui-icons location_pin"/>
              {{dataInfo[indexToShow].description}}
            </a>
            <br/>
            <br/>
            <br/>
            <ul class="text-left">
              <li v-for="text in dataInfo[indexToShow].pro" :key="text">
                <h6 class="card-text mb-2 text-muted">{{text}}</h6>
              </li>
            </ul>
            <br />
            <!-- <h5 class=""><b>{{item.bonus_description}}</b></h5>
            <ul>
              <li v-for="text in item.bonus" :key="text">
                <p class="card-text">{{text}}</p>
              </li>
            </ul> -->
        </card>
      </div>
      </transition>
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
    props: ['dataInfo','isMobileDevice'],
    data() {
      return {
        indexToShow: 0,
        slideIsLeft: true
      };
    },
    methods:{
      changeCard(value){
        if( value > 0){
          this.slideIsLeft = false;
        } else {
          this.slideIsLeft = true;
        }
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
.card a{
  font-size: small !important;
}

.card-section{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 500px;
}

@media screen and (max-width: 500px){
  .card-section{
    width: 500px;
    transform: scale(0.8);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    height: auto;
  }
}

.img-arrow{
  position: relative;
  height: 50px;
  margin: 20px;
  z-index: 1;
}
.back{
  position: relative;
  z-index: 0;
  transition: all .2s ease;
}

.fade-in-right-enter-to,
.fade-in-left-leave {
  opacity: 1;
  transform: translateX(0%);
}

.fade-in-left-enter-to,
.fade-in-right-leave {
  opacity: 1;
}

.fade-in-right-enter,
.fade-in-left-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.fade-in-left-enter,
.fade-in-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}


</style>