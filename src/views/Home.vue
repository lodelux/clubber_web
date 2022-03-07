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
      window.open('clubber://a');;
    }, 1000);
  },
};
</script>
