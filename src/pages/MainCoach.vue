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
      <h4 class="">
              {{mainDescription}}
            </h4></div>
    </div>
    <div v-if="showTemplate" class="section section-about-us">
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
    <div class="container">
      <h2 class="title">{{temoign_Title}}</h2>
      <div class="container-people-card">
        <people-card
        :name="temoignNameList[0]"
        :img="temoignImgList[0]"
        :description="temoignTextList[0]"
        />
        <people-card
        :name="temoignNameList[1]"
        :img="temoignImgList[1]"
        :description="temoignTextList[1]"/>
      </div>
    </div>
    <div class="container">
      <h2 class="title">{{plan_training}}</h2>
      <div class="container-people-card">
        <data-card
        :title="plan_training_dataInfo[0].title"
        :bonus_description="plan_training_dataInfo[0].bonus_description"
        :pro="plan_training_dataInfo[0].pro"
        :bonus="plan_training_dataInfo[0].bonus"
        :price="plan_training_dataInfo[0].price"
        :unite="plan_training_dataInfo[0].unite"
        />
        <data-card
        :title="plan_training_dataInfo[0].title"
        :bonus_description="plan_training_dataInfo[0].bonus_description"
        :pro="plan_training_dataInfo[0].pro"
        :bonus="plan_training_dataInfo[0].bonus"
        :price="plan_training_dataInfo[0].price"
        :unite="plan_training_dataInfo[0].unite"
        />
        <!-- <data-card/>
        <data-card/>
        <data-card/> -->
      </div>
    </div>
    <!-- <div class="container">
      <h2 class="title">{{plan_massage}}</h2>
      <div class="container-people-card">
        <data-card/>
        <data-card/>
        <data-card/>
        <data-card/>
      </div>
    </div> -->
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">{{questionsAndInterest}}</h2>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              v-if="showTemplate"
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              v-if="showTemplate"
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container" v-if="showTemplate">
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
              <n-button :type="theme" round block size="lg"
                >{{rendezVous}}</n-button
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
import PeopleCard from './components/PeopleCard.vue'
import DataCard from './components/DataCard.vue';
export default {
  name: 'MainCoach',
  bodyClass: 'main-coach',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    PeopleCard,
    DataCard
  },
  props:{
    theme: String,
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
      plan_training: "Plans entraînement",
      plan_massage: "Plans massage",
      rendezVous: "Prendre rendez vous",
      questionsAndInterest: "Avez-vous des questions ? Voudriez-vous commencer tout de suite ?",
      showTemplate: false,
      temoignTextList: [],
      temoignImgList: [],
      temoignNameList: [],
      plan_training_dataInfo: [],

    };
  },
  beforeMount(){
    //Nathan hardcode
    this.temoignTextList.push("« Arthur est le meilleur coach. J'ai ajouté 25 livres de muscle cette année. »");
    this.temoignImgList.push("background-image: url('img/natan_temoign.jpg')");
    this.temoignNameList.push("Natan Weinberger, client de 1 ans.");

    //Carole hardcode
    this.temoignTextList.push("« Il m'a beaucoup aidé ! »");
    this.temoignImgList.push("background-image: url('img/carol_temoign.jpg')");
    this.temoignNameList.push("Carol Zhang, client de 1 ans.");

    this.generateFakeDataTraining();
  },

  methods:{

    generateFakeDataTraining(){
      let rowData = {
        title:"Gym Arthur",
        description:"",
        description:"",
        unite:"/séance",
        price:"CAD $50",
        bonus_description:"En plus, vous recevrez:",
        pro:["Je vous entraîne chez vous","On utilise vos équipements et les miens"],
        bonus:["Accès à vos données dans l'application Hexfit","Mesures du corps mensuels"]
      }
      this.plan_training_dataInfo.push(rowData);
    }
  },
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
.container-people-card{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

</style>
