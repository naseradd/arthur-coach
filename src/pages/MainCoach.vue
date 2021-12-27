<template>
  <div>
    <div class="page-header page-header-small">
      <parallax class="page-header-image" :style="background_img">
        </parallax>
      <div class="content-center">
        <div class="container">
          <div class="text-center">
          </div>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
    <div 
      v-if="isHomePage" 
      key="1" 
      class="section" 
      style="background-image: url('img/logo_AR_sek_train_bg.png'); background-size: cover;
        background-position: center;"
    >
      <h3 class="title" style="text-align: center;">{{titleHomePage}}</h3>
      <div class="profile" :style="isMobileDevice? flexColumnDisplay:flexRowDisplay">
        <img src="img/arthur.jpg" alt="Thumbnail Image" class="rounded img-fluid img-raised" />
        <div class="container">
          <h4 class="title">{{mainTitleDescription}}</h4>
          <h5 class="">
            {{mainDescription}}
          </h5>
        </div>
      </div>
      <div class="profile" :style="isMobileDevice? flexColumnDisplay:flexRowDisplay">
        <div class="container">
          <h4 class="title">{{mainTitle2Description}}</h4>
          <h5 class="">
            {{mainDescription2}}
          </h5>
        </div>
        <img src="img/zen.jpg" alt="Thumbnail Image" class="rounded img-fluid img-raised" style='width: 450px;' />
      </div>
      <div class="profile" :style="isMobileDevice? flexColumnDisplay:flexRowDisplay">
        <div class="container">
          <h5 class="">
          <br/>{{endMainDescription}}
          <br/><br/>{{titleHomePage}}
    </h5>
        </div>
      </div>
      
    </div>
    
    <div v-else-if="isTemoignPage" key="2" class="section">
      <h3 class="title" style="text-align: center;">{{temoign_Title}}</h3>
      <div class="container-people-card">
        <people-card 
          v-for="(item,index) in temoignList" 
          :key="index" 
          :name="item.name" 
          :img="item.img" 
          :description="item.text" 
        />
      </div>
    </div>
    <div v-else-if="isGymMassagePage" key="3" class="section" style="background-image: url('img/mix_background.png'); background-size: cover;
        background-position: center;">
      <div class="forfait">
      <div class="forfait-panel">
        <h3 class="title" style="text-align: center;">{{plan_training}}</h3>          
          <data-card :dataInfo="plan_training_dataInfo" />
      </div>
      <div class="forfait-panel">
        <h3 class="title" style="text-align: center;">{{plan_massage}}</h3>
          <data-card :dataInfo="plan_training_dataInfo" />
      </div>
      </div>
    </div>
    </transition>
    <div class="section text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input v-if="showTemplate" class="input-lg" placeholder="First Name..." v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08">
            </fg-input>
            <fg-input v-if="showTemplate" class="input-lg" placeholder="Email Here..." v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85">
            </fg-input>
            <div class="textarea-container" v-if="showTemplate">
              <textarea class="form-control" name="name" rows="4" cols="80" v-model="form.message"
                placeholder="Type a message..."></textarea>
            </div>
            <div class="send-button">
              <n-button :type="theme" round block size="lg" @click="showModal = true">{{rendezVous}}</n-button>
            </div>
            <transition name="modal">
              <dialog-contact v-if="showModal" @close="showModal = false"/>               
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    Button,
    FormGroupInput
  } from '@/components';
  import PeopleCard from './components/PeopleCard.vue'
  import DataCard from './components/DataCard.vue';
  import DialogContact from './components/DialogContact.vue';
  import {getData, getImgData} from '../assets/websiteData';
  export default {
    name: 'MainCoach',
    bodyClass: 'main-coach',
    components: {
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
      PeopleCard,
      DataCard,
      DialogContact,
    },
    props: {
      theme: String,
      isHomePage: {
        type: Boolean,
        default: true,
      },
      isGymMassagePage: {
        type: Boolean,
        default: false,
      },
      isTemoignPage: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        form: {
          firstName: '',
          email: '',
          message: '',
        },
        titleHomePage: getData("titleHomePage"),
        mainDescription: getData("mainDescription"),
        mainTitleDescription: getData("mainTitleDescription"),
        mainDescription2: getData("mainDescription2"),
        mainTitle2Description: getData("mainTitle2Description"),
        endMainDescription: getData("endMainDescription"),
        temoign_Title: getData("temoign_Title"),
        plan_training: getData("plan_training"),
        plan_massage: getData("plan_massage"),
        rendezVous: getData("rendezVous"),
        questionsAndInterest: getData("questionsAndInterest"),
        showTemplate: false,
        temoignList: [],
        plan_training_dataInfo: [],
        background_gym_img: getImgData("background_gym_img"),
        background_zen_img: getImgData("background_zen_img"),
        background_mix_img: getImgData("background_mix_img"),
        showModal: false,
        isMobileDevice: false,
        flexRowDisplay: "display: flex;flex-direction: row;align-items: center;justify-content: space-around;text-align: center;margin-bottom: 40px;",
        flexColumnDisplay: "display: flex;flex-direction: column;align-items: center;justify-content: space-around;text-align: center;margin-bottom: 40px;",

      };
    },
    created() {
      this.background_img = this.background_gym_img;
    },
    beforeMount() {
      //Nathan hardcode
      this.temoignList = getData("temoign");
      this.plan_training_dataInfo = getData("trainingData");


      // this.generateFakeDataTraining();
    },
    mounted(){
      this.isMobileDevice = this.isMobile();
    },
    methods: {
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      },
      clickOnTab(index) {
        if (index == 2) {
          this.background_img = this.background_zen_img
        } else {
          this.background_img = this.background_gym_img
        }
      },
      generateFakeDataTraining() {
        let rowData = {
          title: "Gym Arthur",
          description: "",
          description: "",
          unite: "/séance",
          price: "CAD $50",
          bonus_description: "En plus, vous recevrez:",
          pro: ["Je vous entraîne chez vous", "On utilise vos équipements et les miens"],
          bonus: ["Accès à vos données dans l'application Hexfit", "Mesures du corps mensuels"]
        }
        let rowData2 = {
          title: "Gym Arthur 2",
          description: "",
          description: "",
          unite: "/séance",
          price: "CAD $100",
          bonus_description: "En plus, vous recevrez:",
          pro: ["Je vous entraîne chez vous", "On utilise vos équipements et les miens"],
          bonus: ["Accès à vos données dans l'application Hexfit", "Mesures du corps mensuels"]
        }
        this.plan_training_dataInfo.push(rowData);
        this.plan_training_dataInfo.push(rowData2);
      }
    },
    showDialog(){
      this.showDialogContact = true
    },
  };
</script>
<style>

  .profile img {
    width: 300px;
    margin-left: 100px;
    margin-right: 100px;
  }

  .container-people-card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
  }

  .forfait {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 15px;
  }

  .row {
    display: flex !important;
    flex-direction: column !important;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  }
</style>