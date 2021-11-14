<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/gym_baw.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <div class="text-center">
          </div>
        </div>
      </div>
    </div>
    <div class="profile">
      <img
        src="img/arthur.jpg"
        alt="Thumbnail Image"
        class="rounded img-fluid img-raised"
      />
      <div class="container">
        <h2 class="title">{{mainTitle}}</h2>
      <h4 class="description">
              {{mainDescription}}
            </h4></div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div  class="separator separator-primary"></div>
        <div  v-if="showTemplate" class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/login.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "Over the span of the satellite record, Arctic sea ice has
                  been declining significantly, while sea ice in the
                  Antarctichas increased very slightly"
                  <br />
                  <br />
                  <small>-NOAA</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/bg3.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/bg1.jpg')"
              ></div>
              <h3>
                So what does the new record for the lowest level of winter ice
                actually mean
              </h3>
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </p>
              <p>
                For a start, it does not automatically follow that a record
                amount of ice will melt this summer. More important for
                determining the size of the annual thaw is the state of the
                weather as the midnight sun approaches and temperatures rise.
                But over the more than 30 years of satellite records, scientists
                have observed a clear pattern of decline, decade-by-decade.
              </p>
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Send Message</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'MainCoach',
  bodyClass: 'main-coach',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: '',
      },
      mainTitle: "Bonjour, je m'appelle Arthur",
      mainDescription:
      '" Je suis coach et massothérapeute à Montréal. Je travaille avec une grande variété des gens qui veulent devenir plus forts, plus athlétiques et plus sains. Pour chaque client, je crée un plan personnalisé avec soin et avec attention à la profile de la personne. "',
      temoign_Title: "Témoignages",
      showTemplate: false,

    };
  }
};
</script>
<style>
.profile{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around
}
.profile img{
  width: 300px;
  margin: 100px;
}

</style>
