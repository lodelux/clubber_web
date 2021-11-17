<template>
  <div class="cont flex flex-col items-center justify-center space-y-5">
    <text-logo color="black" />
    <h2>
      Email:
      <h3>clubber@clubber.it</h3>
    </h2>
    <h2>
      Instagram:
      <h3>@clubber</h3>
    </h2>
    <h2>
      Facebook:
      <h3>clubber</h3>
    </h2>
  </div>
</template>

<script>
import textLogo from "../components/textLogo.vue";
export default {
  components: { textLogo },
};
</script>

<style scoped>
h3 {
  @apply inline;
  font: normal normal normal 1rem Nunito;
}
h2 {
  @apply inline-block mt-3;
  font: normal normal bold 1rem Nunito;
}
.cont {
  min-height: calc(100vh - 4.375rem);
}
</style>
