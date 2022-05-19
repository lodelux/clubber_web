<template>
  <div class="min-h-screen">
    <Splash></Splash>
    <div class="sep1">
      <h1>Solita biglietteria online? No grazie</h1>
      <h2>Non pagare in anticipo per andare a ballare</h2>
      <h3>
        Oltre al pagamento online, con Clubber potrai metterti in lista, proprio
        come faresti quando cerchi il tuo PR di fiducia, ma con un solo tap
      </h3>
    </div>
    <div class="cardsContainer">
      <cover-card
        v-for="night in nights"
        :key="night.id"
        :data="night"
        :position="'Home'"
      ></cover-card>
    </div>
    <div class="sep2">
      <h1>Solita biglietteria online? No grazie</h1>
      <h2>Non pagare in anticipo per andare a ballare</h2>
      <h3>
        Oltre al pagamento online, con Clubber potrai metterti in lista, proprio
        come faresti quando cerchi il tuo PR di fiducia, ma con un solo tap
      </h3>
      <button>cacca</button>
    </div>
    <div class="cardsContainer">
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

button {
  @apply py-3 px-10 mb-6;
  border-radius: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font: normal normal bold 1rem Nunito;
  color: #ea0053;
  opacity: 1;
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
export default defineComponent({
  name: "Home",
  components: {
    Splash,
    CoverCard,
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
