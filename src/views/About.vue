<template>
  <section-2 />
  <section-3 />
  <div class="hidden md:block bgcolor w-full h-screen">
    <div class="w-full h-screen bg"></div>
  </div>
</template>

<script>
import Section2 from "../components/about/section2.vue";
import Section3 from "../components/about/section3.vue";

export default {
  components: {  Section2, Section3 },
};
</script>

<style scoped>
.bgcolor {
  background-color: #f6f7f7;
}
.bg {
  background-image: url("../assets/iPhone_guerriglieri.png");
  background-repeat: no-repeat;
  background-size: 90%;
  background-position: 50%;
}
</style>
