<template>
  <div class="peoplecard">
      <div class="section-story-overview">
        <div class="photo-container">
        <img alt="Thumbnail Image" class="rounded-circle img-raised" :src="img" lazy="loaded"/>
        </div>
           <p class="blockquote blockquote-primary">
                  {{description}}
                  <br />
                  <br />
                  <small>{{name}}</small>
                </p>          
        </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'PeopleCard',
  bodyClass: 'people-card',
  components: {
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
  width: 300px !important;
}
.img-raised{
    width: 200px;
    margin-bottom: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

</style>
