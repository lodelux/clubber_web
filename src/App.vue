<template>
  <Navbar />
  <router-view />
  <Foot />
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Foot from "@/components/Foot.vue";
export default {
  name: "Home",
  components: {
    Foot,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
