<template>
  <div class="min-h-screen">
    <Splash></Splash>
    <div class="sep1">
      <h1>Solita biglietteria online? No grazie</h1>
      <h2>Con Clubber hai accesso a liste, prevendite e tavoli nei migliori locali della tua zona.</h2>
    </div>
    <div class="cardsContainer" v-if="!nights[0]">
      <cover-card
        v-for="i in 5"
        :key="i"
        :data="{ isDummy: 1, type: 'night' }"
        :position="'Home'"
      ></cover-card>
    </div>
    <div v-if="nights[0]" class="cardsContainer">
      <cover-card
        v-for="night in nights"
        :key="night.id"
        :data="night"
        :position="'Home'"
      ></cover-card>
    </div>
    <div class="sep2">
      <h1>Più siamo, più sarà facile</h1>
      <h2>Aiutaci ad aiutare i clubbers di tutta Italia</h2>
      <h3>
        Fai conoscere Clubber ai tuoi amici, parlane con loro, condividi! Più persone scaricheranno Clubber, più discoteche vorranno usarla e sarà più facile per tutti trovare la propria serata.
      </h3>
      <a
        :href="'https://www.instagram.com/clubber_people/'"
      >
        <base-button
          class="py-3 px-10 mb-6 cursor-pointer"
          :bg="'white'"
          >Spargi la voce!</base-button
        >
      </a>
    </div>
    <div class="cardsContainer" v-if="!clubs[0]">
      <cover-card
        v-for="i in 5"
        :key="i"
        :data="{ isDummy: 1, type: 'club' }"
        :position="'Home'"
      ></cover-card>
    </div>

    <div class="cardsContainer" v-if="clubs[0]">
      <cover-card
        v-for="club in clubs"
        :key="club.id"
        :data="club"
        :position="'Home'"
      ></cover-card>
    </div>
  </div>
</template>

<style scoped>
.cardsContainer {
  @apply py-12 flex space-x-8 items-center px-8 overflow-scroll;
}

h3 {
  font: normal normal normal 0.7rem Nunito;
}
h1 {
  font: normal normal bold 1.5rem Nunito;
}
h2 {
  font: normal normal bold 1rem Nunito;
}
.sep1 {
  @apply text-center text-white  flex-col space-y-4 py-4 px-2;
  background-color: #06001e;
}
.sep2 {
  @apply text-center text-white  flex-col space-y-4 py-4 px-2;
  background-color: #ea0053;
}
</style>
<script>
import { defineComponent } from "@vue/runtime-core";
import Splash from "../components/home/splash.vue";
import CoverCard from "../components/coverCard.vue";
import BaseButton from "../components/BaseButton.vue";
export default defineComponent({
  name: "Home",
  components: {
    Splash,
    CoverCard,
    BaseButton,
  },
  computed: {
    nights() {
      return this.$store.state.nights;
    },
    clubs() {
      return this.$store.state.clubs;
    },
  },
});
</script>
