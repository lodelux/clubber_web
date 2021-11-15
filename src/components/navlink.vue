<template>
  <button class="navlink">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.navlink {
  @apply hover:bg-gray-600 cursor-pointer py-2 px-4;
  border-radius: 10px;

  height: max-content;

  text-align: left;
  font: normal normal 600  1rem Nunito;
  color: #ffffff;
  opacity: 1;
}
.navlink:hover {
  background-color: rgba(75, 85, 99, 0.5);
}
</style>
