<template>
  <div class="flex w-full start py-9">
    <div class="w-1/3 flex justify-center content-center px-2">
      <img class="logo" :src="club.logo_link[0]" />
    </div>
    <div class="w-2/3 flex-col justify-center space-y-3">
      <h1>{{ club.name }}</h1>
      <h2>{{ club.address }} - {{ club.city }}</h2>
    </div>
  </div>
  <img class="w-full" :src="club.cover_link[0]" />
  <h3 class="py-12 px-6">{{ club.description }}</h3>
  <div class="nextNights flex-col px-6 py-8 space-y-8 overflow-auto">
    <p class=" left-1  sticky">Prossime Serate a {{ club.name }}</p>
    <div class="flex content-center justify-start space-x-8 px-4 ">
      <cover-card
        v-for="night in nightsOfClub"
        :key="night.id"
        :data="night"
        :position="'Home'"
      >
      </cover-card>
    </div>
  </div>
  <div class="flex-col px-6 py-12 space-y-4">
    <h2>Indirizzo</h2>
    <h3>{{ club.address }}</h3>
    <h2>Contatti</h2>
    <h3 v-for="contact in club.contacts" :key="contact.contact">
      {{ contact.contact }}
    </h3>
  </div>
</template>

<script>
import coverCard from "../components/coverCard.vue";
export default {
  components: { coverCard },
  name: "ClubDetails",
  computed: {
    club() {
      let foundClub = this.$store.state.clubs.filter(
        (club) => club.id == this.$route.params.id
      );
      if (foundClub) {
        return foundClub[0];
      }
      return undefined;
    },
    nightsOfClub() {
      let foundNights = this.$store.state.nights.filter(
        (night) => night.host == this.$route.params.id
      );
      if (foundNights) {
        return foundNights;
      }
      return undefined;
    },
  },
};
</script>

<style scoped>
p {
  @apply text-white;
  font: normal normal 600 1.25rem/1.625rem Nunito;
}
.nextNights {
  background: #06001e;
}
.logo {
  @apply rounded-full;
  width: 4.5rem;
  height: 4.5rem;
}
h1 {
  font: normal normal bold 1.5rem/2.125rem Nunito;
  color: #171424;
}
h2 {
  font: normal normal 600 1rem/1.25rem Nunito;
  color: #171424;
}
h3 {
  font: normal normal normal 0.875rem/1.25rem Nunito;
  color: #06001e;
}
</style>
