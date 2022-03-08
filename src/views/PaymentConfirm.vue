<template>
  <div class="cont w-full">
    <div
      class="
        flex flex-col
        w-full
        items-center
        h-full
        justify-start
        pt-12
        space-y-10
      "
    >
      <text-logo color="black" />
      <h3 v-if="this.state == 'loading'" class="txt">
        Attesa conferma pagamento
      </h3>
      <h3 v-if="this.state == 200">
        Transazione confermata, <a href="https://clubber.page.link">clicca qui per tornare all' app</a>
      </h3>
      <h3 v-if="this.state != 200 && this.state != 'loading'">
        Si è verificato un errore durante il tentativo di pagamento
      </h3>
      <div v-if="this.state == 'loading'" class="loading"></div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import textLogo from "../components/textLogo.vue";
export default {
  components: { textLogo },
  data() {
    return {
      state: "loading",
      payload: {
        payment_intent: "",
        client_uid: "",
      },
    };
  },
  mounted() {
    this.payload.payment_intent = this.$route.query.payment_intent;
    this.payload.client_uid = this.$route.query.client_uid;
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=UTF-8";
    axios
      .post(
        "https://us-central1-clubber-73cbd.cloudfunctions.net/confirmBooking",
        this.payload
      )
      .then((res) => {
        this.state = res.status;
      })
      .catch((error) => {
        if (error) {
          this.state = "error";
        }
      });
  },
};
</script>

<style scoped>
a {
  @apply underline font-bold;
  color: #ea0053;
}
.loading {
  border: 10px solid #f3f3f3; 
  border-top: 10px solid #ea0053;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
h3 {
  @apply text-center px-1;
  color: #06001e;
  font: normal normal bold 24px/43px Nunito;
}
.cont {
  height: calc(100vh - 4.375rem);
  background: transparent url("../assets/contacts.svg") no-repeat;
  background-size: 1920px;
  background-position-x: 50%;
  background-position-y: bottom;
  opacity: 1;
}
</style>
