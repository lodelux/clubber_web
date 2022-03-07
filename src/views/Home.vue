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
    setTimeout(() => {
      location.replace("clubber.page.link");
    }, 1000);
  },
};
</script>
