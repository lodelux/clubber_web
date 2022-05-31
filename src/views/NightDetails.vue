<template>
  <div v-if="isMobile" class="px-8 py-8">
    <div class="w-full flex space-x-3 justify-center pb-8">
      <div class="flex-grow flex-col text-left justify-start space-y-3">
        <h1>{{ night.name }}</h1>
        <h2>
          <span
            @click="this.$router.push(`/club/${clubOfNight.id}`)"
            class="underline cursor-pointer"
          >
            {{ clubOfNight.name }}
          </span>
          - {{ clubOfNight.address }}
        </h2>

        <h3>{{ time }}</h3>
      </div>
      <cover-card :data="night" :position="'Details'"></cover-card>
    </div>
    <div class="flex pb-9 justify-start flex-wrap">
      <div class="tag" v-for="tag in tags" :key="tag">
        {{ tag }}
      </div>
    </div>
    <!-- add dj div -->
    <h2>Descrizione</h2>
    <br />
    <p>{{ night.description }}</p>
    <a
      :href="
        'https://clubber.page.link/?link=https%3A%2F%2Fclubberpeople.com%2Fevents%3Fhost%3D' +
        night.host +
        '%26event%3D' +
        night.id +
        '&apn=com.pbsoftware.clubber&amv=1&ibi=com.clubberapp.clubber&isi=1582459758&imv=2'
      "
    >
      <base-button
        class="px-2 py-4 w-full h-full mt-4 bottom-5 sticky"
        :bg="'red'"
        >Prenota Ora</base-button
      >
    </a>
  </div>
  <div v-if="!isMobile">
    <div class="flex space-x-12 px-16 py-7 lg:px-32 lg:py-14 content-center justify-between">
      <div class="flex-col flex-shrink w-1/2 text-left space-y-2">
        <h1>{{ night.name }}</h1>
        <h2>
          <span
            @click="this.$router.push(`/club/${clubOfNight.id}`)"
            class="underline cursor-pointer"
          >
            {{ clubOfNight.name }}
          </span>
          - {{ clubOfNight.address }}
        </h2>

        <h3>{{ time }}</h3>
        <div class="flex pb-9 justify-start flex-wrap">
          <div class="tag" v-for="tag in tags" :key="tag">
            {{ tag }}
          </div>
        </div>
        <!-- add dj div -->
        <p>{{ night.description }}</p>
        <a>
          <base-button
            @click="this.$router.push('/about')"
            class="px-2 py-4 w-full mt-16"
            :bg="'red'"
            >Prenota Ora</base-button
          ></a
        >
      </div>
      <div class="flex justify-center content-center">
        <cover-card :data="night" :position="'Details'"></cover-card>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import coverCard from "../components/coverCard.vue";
export default {
  components: { coverCard, BaseButton },
  props: ["data", "position"],
  name: "NightDetails",
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
    night() {
      let foundNight = this.$store.state.nights.filter(
        (night) => night.id == this.$route.params.id
      );
      if (foundNight) {
        return foundNight[0];
      }
      return "error";
    },
    tags() {
      return this.night.tags.filter((tag) => tag);
    },
    clubOfNight() {
      return this.$store.state.clubs.filter(
        (club) => club.id == this.night.host
      )[0];
    },
    time() {
      return new Date(this.night.date.start).toLocaleDateString("it-IT", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
    },
  },
};
</script>

<style scoped>
.tag {
  @apply text-white px-4 py-2 flex content-center items-center text-center mx-1 my-2;
  background: #06001e 0% 0% no-repeat padding-box;
  border-radius: 18px;
  text-transform: capitalize;
}
h1 {
  font: normal normal 600 1.25rem/1.625rem Nunito;
  color: #06001e;
}
h2 {
  font: normal normal 600 1rem/1.25rem Nunito;
  color: #06001e;
}
</style>
