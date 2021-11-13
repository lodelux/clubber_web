<template>
  <div class="nav">
    <navlink v-for="link in links" :key="link">{{link}}</navlink>
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
      links: ["Home", "Chi Siamo", "Contatti"],
    };
  },
};
</script>

<style>
.nav {
  @apply flex w-full justify-center md:justify-start md:space-x-10 items-center md:pl-10;
  height: 90px;
  background: var(---06001e) 0% 0% no-repeat padding-box;
  background: #06001e 0% 0% no-repeat padding-box;
  opacity: 1;
}
</style>
