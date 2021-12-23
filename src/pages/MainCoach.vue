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
      <div class="profile">
        <img src="img/arthur.jpg" alt="Thumbnail Image" class="rounded img-fluid img-raised" />
        <div class="container">
          <!-- <h2 class="title">{{mainTitle}}</h2> -->
          <h5 class="">
            {{mainDescription}}
          </h5>
        </div>
      </div>
      <div class="profile">
        <div class="container">
          <!-- <h2 class="title">{{mainTitle}}</h2> -->
          <h5 class="">
            {{mainDescription}}
          </h5>
        </div>
        <img src="img/arthur.jpg" alt="Thumbnail Image" class="rounded img-fluid img-raised" />
      </div>
    </div>
    <div v-else-if="isTemoignPage" key="2" class="section">
      <h3 class="title" style="text-align: center;">{{temoign_Title}}</h3>
      <div class="container-people-card">
        <people-card :name="temoignNameList[0]" :img="temoignImgList[0]" :description="temoignTextList[0]" />
        <people-card :name="temoignNameList[1]" :img="temoignImgList[1]" :description="temoignTextList[1]" />
      </div>
    </div>
    <div v-else-if="isGymMassagePage" key="3" class="section" style="background-image: url('img/mix_background.png'); background-size: cover;
        background-position: center;">
      <div class="forfait">
      <div>
        <h3 class="title" style="text-align: center;">{{plan_training}}</h3>          
          <data-card :dataInfo="plan_training_dataInfo" />
      </div>
      <div>
        <h3 class="title" style="text-align: center;">{{plan_massage}}</h3>
          <data-card :dataInfo="plan_training_dataInfo" />
      </div>
      </div>
    </div>
    </transition>
    <div class="section section-contact-us text-center">
      <div class="container">
        <!-- <h2 class="title">{{questionsAndInterest}}</h2> -->
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
        titleHomePage: "Arthur Rousseau",
        mainDescription: '" Je suis coach et massothérapeute à Montréal. Je travaille avec une grande variété des gens qui veulent devenir plus forts, plus athlétiques et plus sains. Pour chaque client, je crée un plan personnalisé avec soin et avec attention à la profile de la personne. "',
        temoign_Title: "Livre d'or",
        plan_training: "Forfaits Entraînement",
        plan_massage: "Forfaits Massage",
        rendezVous: "Contactez moi",
        questionsAndInterest: "Avez-vous des questions ? Voudriez-vous commencer tout de suite ?",
        showTemplate: false,
        temoignTextList: [],
        temoignImgList: [],
        temoignNameList: [],
        plan_training_dataInfo: [],
        tab_title: [],
        tab_nav_link: [],
        tab_panes: [],
        background_gym_img: 'background-image: url("img/gym_baw.jpg")',
        background_zen_img: 'background-image: url("img/zen_background.jpg")',
        background_mix_img: 'background-image: url("img/mix_background.jpg")',
        background_img: "",
        showModal: false,

      };
    },
    created() {
      this.background_img = this.background_gym_img;
    },
    beforeMount() {
      //Nathan hardcode
      this.temoignTextList.push("« Arthur est le meilleur coach. J'ai ajouté 25 livres de muscle cette année. »");
      this.temoignImgList.push("background-image: url('img/natan_temoign.jpg')");
      this.temoignNameList.push("Natan Weinberger, client de 1 ans.");

      //Carole hardcode
      this.temoignTextList.push("« Il m'a beaucoup aidé ! »");
      this.temoignImgList.push("background-image: url('img/carol_temoign.jpg')");
      this.temoignNameList.push("Carol Zhang, client de 1 ans.");

      this.tab_title.push(this.temoign_Title);
      this.tab_title.push(this.plan_training);
      this.tab_title.push(this.plan_massage);


      this.generateFakeDataTraining();
    },

    methods: {
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
  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }

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