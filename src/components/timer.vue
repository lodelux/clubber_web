<template>
  <span class="card">
    <h3 class="w-full">
      {{ this.timeLeft.Days }}d {{ this.timeLeft.Hours }}h
      {{ this.timeLeft.Minutes }}m {{ this.timeLeft.Seconds }}s
    </h3></span
  >
</template>

<script>
export default {
  props: {
    toDate: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      timeLeft: {
        Date: "",
        Days: "",
        Hours: "",
        Minutes: "",
        Seconds: "",
      },
    };
  },
  methods: {
    //every second calculate remaining time
    countdown() {
      setInterval(() => {
        this.timeLeft = new Date(this.toDate - Math.floor(Date.now()));
        let seconds = Math.floor(this.timeLeft.getTime() / 1000);
        this.timeLeft.Seconds = seconds % 60;
        this.timeLeft.Minutes = Math.floor(seconds / 60) % 60;
        this.timeLeft.Hours = Math.floor(seconds / 60 / 60) % 24;
        this.timeLeft.Days = Math.floor(seconds / 60 / 60 / 24);
      }, 1000);
    },
  },
  created() {
    this.countdown();
  },
};
</script>

<style>
.card {
  @apply px-20 py-3 text-center;
  font: normal normal bold 20px/21px Nunito;
  letter-spacing: 0.3px;
  color: #ffffff;
  opacity: 1;
  background: var(---ea0053) 0% 0% no-repeat padding-box;
  background: #ea0053 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  opacity: 1;
}
</style>
