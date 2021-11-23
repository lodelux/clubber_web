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
      <a href="mailto:info@clubberpeople.com" target="_blank">
        <h2>
          Email:
          <h3>info@clubberpeople.com</h3>
        </h2>
      </a>
      <a href="www.instagram.com/clubber_people" target="_blank">
        <h2>
          Instagram:
          <h3>@clubber_people</h3>
        </h2>
      </a>
      <a href="www.facebook.com/clubberpeople" target="_blank">
        <h2>
          Facebook:
          <h3>clubber (@clubberpeople)</h3>
        </h2>
      </a>
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
.foot {
  display: none;
}
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
