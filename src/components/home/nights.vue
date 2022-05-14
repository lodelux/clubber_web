<template>
  <div class="h-80 flex space-x-5 items-center px-5 overflow-scroll">
    <night-card v-for="item in Array.from(Array(5).keys())" :key="item">
    </night-card>
  </div>
</template>

<script>
import NightCard from "./nightCard.vue";
export default {
  name: "Nights",
  components: {
    NightCard,
  },
};
</script>

<style></style>
