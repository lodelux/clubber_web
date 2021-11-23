<template>
  <span class="card">
    <h3 class="w-full">
      {{ this.timeLeft.Days.padStart(2, "0") }}d
      {{ this.timeLeft.Hours.padStart(2, "0") }}h
      {{ this.timeLeft.Minutes.padStart(2, "0") }}m
      {{ this.timeLeft.Seconds.padStart(2, "0") }}s
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
        Days: "00",
        Hours: "00",
        Minutes: "00",
        Seconds: "00",
      },
    };
  },
  methods: {
    //every second calculate remaining time
    countdown() {
      setInterval(() => {
        if (this.toDate - Math.floor(Date.now()) >  0 ) {
          this.timeLeft = new Date(this.toDate - Math.floor(Date.now()));
          let seconds = Math.floor(this.timeLeft.getTime() / 1000);
          this.timeLeft.Seconds = (seconds % 60).toString();
          this.timeLeft.Minutes = (Math.floor(seconds / 60) % 60).toString();
          this.timeLeft.Hours = (Math.floor(seconds / 60 / 60) % 24).toString();
          this.timeLeft.Days = Math.floor(seconds / 60 / 60 / 24).toString();
        }
      }, 1000);
    },
  },
  created() {
    this.countdown();
  },
};
</script>

<style scoped>
.card {
  @apply px-20 py-3 text-center;
  min-width: 18.46rem;
  min-height: 2.75rem;
  font: normal normal bold 1.25rem Nunito;
  color: #ffffff;
  opacity: 1;
  background: #ea0053 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  opacity: 1;
}
</style>
