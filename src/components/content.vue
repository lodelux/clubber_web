<template>
  <div class="content flex flex-col justify-center items-center space-y-10">
    <div class="flex flex-row">
      <p class="logo">Clu</p>
      <p class="a logo">bb</p>
      <p class="logo">er</p>
    </div>
    <div class="caption">Alla pubblicazione</div>
    <Timer></Timer>
  </div>
</template>

<script>
import Timer from "@/components/timer.vue";
export default {
  components: {
    Timer,
  },
};
</script>

<style>
.content {
  @apply w-full bg-gray-900;
  height: 450px;
}

.logo {
  font: normal normal bold 79.5px/108.5px Nunito;
  letter-spacing: 0px;
  color: #ffff;
}
.a {
  color: #ea0053;
}

.caption {
  text-align: center;
  font: normal normal bold 21px/22px Nunito;
  letter-spacing: 0.32px;
  color: #ffffff;
}
</style>
