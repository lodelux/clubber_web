<template>
  <div class="content">
    <div class="flex flex-row">
      <p class="logo">Clu</p>
      <p class="a logo">bb</p>
      <p class="logo">er</p>
    </div>
    <div class="caption">Alla pubblicazione</div>
    <Timer :toDate="this.toDate"></Timer>
  </div>
  <div class="hero">
    <p class="info">
      "Prenotare una serata in discoteca diventa semplice. Addio sbatti di
      cercare un PR, ciao bello non hai capito che figata di app che siamo"
    </p>
    <button class="us">Chi Siamo</button>
  </div>
  <div class="how"><p class="mt-12">Come funzia sfunzia</p></div>
</template>

<script>
import Timer from "@/components/timer.vue";
export default {
  components: {
    Timer,
  },
  data() {
    return {
      // UTC Epoch time in MILLISECONDS
      toDate: 1636914500000
    }
  }
};
</script>

<style>
.how {
  @apply w-full h-96 text-center;
  font: normal normal bold 36px/21px Nunito;
  letter-spacing: 0.54px;
  color: #171424;
  opacity: 1;
}
.us {
  @apply py-3 px-10 mb-6;
  border-radius: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font: normal normal bold 16px/21px Nunito;
  letter-spacing: 0.24px;
  color: #ea0053;
  opacity: 1;
}
.info {
  @apply md:w-1/2 text-center p-6;
  font: normal normal bold 24px/35px Nunito;
  letter-spacing: 0.36px;
  color: #ffffff;
}
.content {
  @apply w-full bg-gray-900 flex flex-col justify-center items-center space-y-10;
  min-height: 450px;
}

.logo {
  font: normal normal bold 79.5px/108.5px Nunito;
  letter-spacing: 0px;
  color: #ffff;
}
.a {
  color: #ea0053;
}

.caption {
  text-align: center;
  font: normal normal bold 21px/22px Nunito;
  letter-spacing: 0.32px;
  color: #ffffff;
}

.hero {
  @apply w-full flex flex-col justify-evenly items-center;
  min-height: 270px;
  background: #ea0053 0% 0% no-repeat padding-box;
}
</style>
