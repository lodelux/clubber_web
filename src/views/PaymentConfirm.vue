<template>
  {{ this.$route.query.payment_intent }}
  {{ this.$route.query.client_uid }}
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      payload: {
        payment_intent: "",
        client_uid: "",
      },
    };
  },
  mounted() {
    this.payload.payment_intent = this.$route.query.payment_intent;
    this.payload.client_uid = this.$route.query.client_uid;
    console.log(this.payload)
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post(
        // 'https://jsonplaceholder.typicode.com/posts',
        "https://us-central1-clubber-73cbd.cloudfunctions.net/confirmBooking",
        this.payload
      )
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style></style>
