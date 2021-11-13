<template>
  <div class="home">
    <navbar></navbar>
    <Content></Content>
  </div>
</template>

<script>
import Content from '../components/content.vue';
import Navbar from "../components/navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Content,
  },
};
</script>
