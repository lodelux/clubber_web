<template>{{ getNight.name }}</template>

<script>
export default {
  name: "NightDetails",
  computed: {
    getNight() {
      let foundNight = this.$store.state.nights.filter(
        (night) => night.id == this.$route.params.id
      );
      if (foundNight) {
        return foundNight[0];
      }
      return "error";
    },
  },
};
</script>

<style></style>
