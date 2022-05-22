<template>
  <button :class="bg" ><slot></slot></button>
</template>

<script>
export default {
  props: ["bg"],
};
</script>

<style scoped>
button {
  border-radius: 0.625rem;
  box-shadow: 0px 0.1875rem 0.375rem #00000029;
  opacity: 1;
  opacity: 1;
}
.white {
  background: #ffffff 0% 0% no-repeat padding-box;
  color: #ea0053;
  font: normal normal bold 1rem Nunito;
}

.red {
  background: #ea0053 0% 0% no-repeat padding-box;
  color: #ffffff;
  font: normal normal bold 1.25rem Nunito;
}
</style>
