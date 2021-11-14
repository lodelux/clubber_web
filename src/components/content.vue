<template>
  <div class="wrapper relative">
    <div class="absolute w-full h-full bgimg "></div>
    <div class="splash  relative">
      <div class="flex flex-row">
        <p class="logo opacity-1">Clu</p>
        <p class="a logo">bb</p>
        <p class="logo">er</p>
      </div>
      <div class="caption">Alla pubblicazione</div>
      <Timer :toDate="this.toDate"></Timer>
    </div>
  </div>
  <div class="hero">
    <p class="info">
      "Prenotare una serata in discoteca diventa semplice. Addio sbatti di
      cercare un PR, ciao bello non hai capito che figata di app che siamo"
    </p>
    <button class="us">Chi Siamo</button>
  </div>
  <div class="how">
    <p class="mt-12">Come funziona</p>
    <div
      class="
        flex
        flex-col
        content-center
        lg:flex-row
        justify-center
        space-y-12
        lg:space-y-0 lg:space-x-16
        w-full
        flex-wrap
        mt-12
      "
    >
      <card v-for="(card, i) in this.cards" :key="i" :card="card"></card>
    </div>
  </div>
</template>

<script>
import Timer from "@/components/timer.vue";
import Card from "@/components/card.vue";
export default {
  components: {
    Timer,
    Card,
  },
  data() {
    return {
      // UTC Epoch time in MILLISECONDS
      toDate: 1639506500000,
      cards: [
        {
          img: "Trova.svg",
          title1: "Trova",
          title2: "la serata per te",
          subtitle1:
            "Scegli fra le serate disponibili usando i filtri per trovare la tua serata",
        },
        {
          img: "Personalizza.svg",
          title1: "Personalizza",
          title2: "la tua prenotazione",
          subtitle1:
            "Aggiungi alla prenotazione drink,bottiglie,tavoli,offerte e molto altro",
        },
        {
          img: "Paga.svg",
          title1: "Paga",
          title2: "direttamente dall'app",
          subtitle1: "Paga direttamente dall'app in sicurezza e senza sbatti",
        },
      ],
    };
  },
};
</script>

<style scoped>
.how {
  @apply w-full pb-12 text-center;
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
.bgimg {
  background: transparent url("../assets/background.png") no-repeat;
  background-size: 1920px;
  background-position: 50%;
  opacity: 1;
}
.splash {
  @apply w-full  flex flex-col justify-center items-center space-y-10;
  min-height: 1080px;
}

.logo {
  font: normal normal bold 79.5px/108.5px Nunito;
  letter-spacing: 0px;
  opacity: 1;
  color: #ffff;
}
.a {
  opacity: 1;
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
