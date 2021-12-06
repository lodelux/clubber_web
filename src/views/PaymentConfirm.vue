<template>
  <p v-if="this.state == 'loading'">LOADING</p>
  <p v-if="this.state == 200">SUCCESS</p>
  <p v-if="this.state != 200 && this.state != 'loading'">ERROR</p>
</template>

<script>
import axios from "axios";

export default {
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

<style></style>
