<template>
  <Navbar />
  <router-view />
  <Foot v-if="pos != 'Contacts'" />
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Foot from "@/components/Foot.vue";
import { defineComponent } from "vue";
import axios from "axios";
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
    this.getClubs();
    this.getNights();
  },
  methods: {
    getClubs: async function () {
      try {
        let response = await axios.get(this.$store.state.CLUB_API);
        if (response.status == 200 && response.data) {
          this.$store.dispatch("addClubs", response.data);
        }
      } catch {
        null;
      }
    },
    getNights: async function () {
      try {
        let response = await axios.get(this.$store.state.NIGHT_API);
        if (response.status == 200 && response.data) {
          this.$store.dispatch("addNights", response.data);
        }
      } catch {
        null;
      }
    },
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
