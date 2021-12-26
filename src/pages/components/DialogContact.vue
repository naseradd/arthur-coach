<template>
<div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div
             
            class="loadingContent"
            v-show="isLoading"
          >
            <i class="now-ui-icons loader_refresh rotating" v-show="!isSuccessfull"></i>
            <i class="now-ui-icons ui-1_check" v-show="isSuccessfull"></i>
          </div>
          <div class="main-content" v-show="!isLoading">
          <n-button 
            type="primary" 
            class="close-button"
            @click="close()"
          >X</n-button>
          <h3 class="title">{{dialogTitle}}</h3>

              <p class="description">{{dialogDescription}}</p>
              <div class="row">
          <div class="col-lg-12 text-center ml-auto mr-auto col-md-8">
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
          </div>
        </div>
          <div class="modal-footer">
            <slot name="footer">
              <n-button 
                type="primary" 
                round block size="lg"
                @click="sendMessage()"
              >{{dialogSend}}</n-button>
            </slot>
          </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import emailjs from 'emailjs-com';

  export default {
    name: 'DialogContact',
    bodyClass: 'dialog-contact',
    components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      isLoading: false,
      isSuccessfull: false,
      dialogTitle:"Envoyez moi un message privée",
      dialogDescription: "Je vous répondrai sur votre email dès que possible. Merci d'avance et bonne journée !",
      dialogSend: "Envoyer le message"
    };
  },
  computed:{
    style () {
      return { transform: 'rotate(' + 0.5 + '0.5)'}
    },
  },
  mounted(){
    emailjs.init("user_8zI3HanvKMoJdCRrNr11Q");
  },
  methods:{
    sendMessage(){
      let that = this;
      that.isLoading = true;
      try{
      emailjs.send(
        "service_uvnwc3e",
        "template_sgshpsf",
        {
          email: that.form.email,
          from_name: that.form.firstName,
          message: that.form.message
        })
        .then(function(response) {
          //console.log('SUCCESS!', response.status, response.text);
          that.isSuccessfull = true;
          setTimeout(() => {  
            that.close();
            that.isLoading = false;
            that.isSuccessfull = false;
          }, 1500);    
        }, function(error) {
          that.close();
          that.isLoading = false;
          that.isSuccessfull = false;
        });
      }
      catch {
        that.close();
        that.isLoading = false;
        that.isSuccessfull = false;
      }
    },
    close(){
      this.form.firstName = '',
      this.form.email = '',
      this.form.message = '',
      this.$emit('close');
    }
  }
};
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 65%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.close-button{
  float: right;
}

.loadingContent{
  font-size: 50px;
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}

</style>



