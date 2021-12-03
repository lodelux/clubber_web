<template>
  <div class="wrapper relative">
    <div class="absolute w-full h-full bgimg"></div>
    <transition name="fade-in" appear>
      <div class="splash relative">
        <text-logo />
        <!-- <div class="caption">Alla pubblicazione</div>
        <Timer :toDate="this.toDate"></Timer> -->
      </div>
    </transition>
  </div>
  <div class="how mb-5">
    <p class="mt-12">Come funziona</p>
    <div
      class="
        flex flex-col
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

  <div class="hero">
    <p class="info">
      "Prenotare una serata in discoteca diventa semplice. Addio sbatti di
      cercare un PR, ciao bello non hai capito che figata di app che siamo"
    </p>
    <router-link :to="{ name: 'About' }">
      <button class="us">Chi Siamo</button>
    </router-link>
  </div>
</template>

<script>
import Card from "@/components/home/card.vue";
import TextLogo from "../textLogo.vue";
export default {
  components: {
    Card,
    TextLogo,
  },
  data() {
    return {
      // UTC Epoch time in MILLISECONDS
      toDate: 1638442800000,
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
            "Aggiungi alla prenotazione drink, bottiglie, tavoli, offerte e molto altro",
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
  font: normal normal bold 2.25rem Nunito;
  color: #171424;
  opacity: 1;
}
.us {
  @apply py-3 px-10 mb-6;
  border-radius: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font: normal normal bold 1rem Nunito;
  color: #ea0053;
  opacity: 1;
}
.info {
  @apply md:w-1/2 text-center p-6;
  font: normal normal bold 1.5rem Nunito;
  color: #ffffff;
}

.wrapper {
  background-color: #08001d;
}
.bgimg {
  /* to put absolute path */

  background: transparent url("../../assets/background.png") no-repeat;
  background-size: 1920px;
  background-position: 50%;
  opacity: 1;
}
.splash {
  @apply w-full  flex flex-col justify-center items-center space-y-10;
  min-height: calc(100vh - 4.375rem);
  /* min-height: 28.125rem; */
}

.caption {
  text-align: center;
  font: normal normal bold 1.3rem Nunito;
  color: #ffffff;
}

.hero {
  @apply w-full flex flex-col justify-evenly items-center;
  min-height: 16.875rem;
  background: #ea0053 0% 0% no-repeat padding-box;
}
</style>
