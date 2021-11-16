<template>
  <div class="nav">
    <navlink :to="'Home'">
      <img src="../assets/logoNoBg.png" />
    </navlink>
    <navlink v-for="link in links" :key="link.name" :to="link.name">
      {{ link.text }}
    </navlink>
  </div>
</template>

<script>
import navlink from "@/components/navlink.vue";
export default {
  components: {
    navlink,
  },
  data() {
    return {
      links: [
        {
          text: "Chi Siamo",
          name: "About",
        },
        {
          text: "Contatti",
          name: "Home",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 3.125rem;
}

.nav {
  @apply flex w-full justify-center md:justify-start md:space-x-10 items-center md:pl-10;
  min-height: 4.375rem;
  background: #06001e 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>
