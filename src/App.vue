<template>
  <Navbar />
  {{ this.$router.route }}
  <router-view />
  <Foot v-if="pos != 'Contacts'" />
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Foot from "@/components/Foot.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    Foot,
    Navbar,
  },
  computed: {
    pos() {
      return this.$route.name;
    },
  },
  mounted() {
    this.$store.dispatch("addNights", [{ id: 1, name: "test" },{ id: 1, name: "test" },{ id: 1, name: "test" },{ id: 1, name: "test" },{ id: 1, name: "test" },{ id: 1, name: "test" },{ id: 1, name: "test" },{ id: 1, name: "test" },]);
  },
});
</script>

<style>
#app {
  font-family: Nunito;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-in-enter-from {
  opacity: 0;
}

.fade-in-enter-active {
  transition: all 1s ease-in;
}
</style>
