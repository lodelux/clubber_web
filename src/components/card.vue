<template>
  <div class="card">
    <div class="imgblock">
      <img :src="require('../assets/' + this.card.img)" />
    </div>
    <h1>{{ this.card.title1 }}</h1>
    <h2>{{ this.card.title2 }}</h2>
    <h3>{{ this.card.subtitle1 }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
h3 {
  @apply mt-4 mx-3;
  color: #73737d;
  font-size: 11.5px;
  line-height: 14px;
}
h2 {
  @apply mx-3;
  color: #06001e;
  font-size: 22px;
}
h1 {
  @apply mt-4 mx-3;
  color: #ea0053;
  font-size: 22px;
}
.imgblock {
  @apply w-full flex justify-center;
  height: 166px;
}
img {
  
  height: 166px;
}
.card {
  @apply  py-5 text-left;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 12px #00000029;
  opacity: 1;
  border-radius: 10px;
  width: 260px;
  min-height: 339px;
}
</style>
