<template>
  <div class="home">
    <navbar></navbar>
    <Content></Content>
    <Foot></Foot>
  </div>
</template>

<script>
import Content from "../components/content.vue";
import Navbar from "../components/navbar.vue";
import Foot from "@/components/Foot.vue";
export default {
  name: "Home",
  components: {
    Foot,
    Navbar,
    Content,
  },
};
</script>
