<template>
  <div class="home">
    <Content></Content>
  </div>
</template>

<script>
import Content from "../components/home/content.vue";
export default {
  name: "Home",
  components: {
    Content,
  },
  mounted() {
    window.open('https://clubber.page.link')
  },
};
</script>
