<template>
  <div class="flex flex-row">
    <p class="logo opacity-1" :class="color">Clu</p>
    <p class="red logo">bb</p>
    <p class="logo" :class="color">er</p>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style scoped>
.logo {
  font: normal normal bold 4.965rem Nunito;
  opacity: 1;
  color: #ffff;
}
.red {
  opacity: 1;
  color: #ea0053;
}

.black {
  opacity: 1;
  color: #06001e;
}

.white {
  opacity: 1;
  color: white;
}
</style>
