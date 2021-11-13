<template>
  <div class="navlink ">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navlink {
  @apply hover:bg-gray-600 hover:bg-opacity-50;
  height: max-content;
  margin-top: 31px;
  margin-bottom: 31px;
  margin-left: 66px;
  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 10px;

  text-align: left;
  font: normal normal 600 20px/21px Nunito;
  letter-spacing: 0.3px;
  color: #ffffff;
  opacity: 1;
}
.navlink:hover {
  background-color: rgba(75, 85, 99, 0.5);
}
</style>
