<template>
  <div class="cont w-full">
    <div
      class="
        flex flex-col
        w-full
        items-center
        h-full
        justify-start
        pt-14
        space-y-5
      "
    >
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
  height: calc(100vh - 4.375rem);
  background: transparent url("../assets/contacts.svg") no-repeat;
  background-size: 1920px;
  background-position-x: 50%;
  background-position-y: bottom;
  opacity: 1;
}
</style>
