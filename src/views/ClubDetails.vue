<template>{{ getClub.name }}</template>

<script>
export default {
  name: "ClubDetails",
  computed: {
    getClub() {
      let foundClub = this.$store.state.clubs.filter(
        (club) => club.id == this.$route.params.id
      );
      if (foundClub) {
        return foundClub[0];
      }
      return "error";
    },
  },
};
</script>

<style></style>
