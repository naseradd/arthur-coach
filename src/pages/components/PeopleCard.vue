<template>
  <div class="peoplecard">
      <card style="width: 21rem;">
      <div class="section-story-overview">
        <div class="photo-container">
        <img
          alt="Circle Image"
          class=" rounded-circle" lazy="loaded"
          :src="img"
        />
        </div>
        <br/><br/><h5>{{description}}</h5><br/><br/>
        <h6 style="texte-center">{{name}}</h6>
        <!-- <p class="blockquote blockquote-default">
              {{description}}
              <br />
              <br />
              <small>{{name}}</small>
        </p>           -->
        </div>  
      </card>
  </div>
  
</template>
<script>
import Card from '../../components/Cards/Card.vue';
export default {
  name: 'PeopleCard',
  bodyClass: 'people-card',
  components: {
    Card
  },
  props:{
      img:{
          type: String,
          default: "",
      },
      description:{
          type: String,
          default: "",
      },
      name:{
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
.blockquote {
  position: inherit !important;
  width: auto !important;
}
.image-container{
    margin-bottom: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

</style>
