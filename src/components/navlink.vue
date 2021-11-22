<template>
  <router-link :to="{ name: to }">
    <button class="navlink" :class="isCurrent ? 'font-bold' : 'font-semibold'">
      <slot></slot>
    </button>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    isCurrent() {
      return this.to == this.$route.name;
    },
  },
};
</script>

<style scoped>
.navlink {
  @apply hover:bg-gray-600 cursor-pointer py-2 px-4;
  border-radius: 10px;

  height: max-content;

  text-align: left;
  font-family: Nunito;
  font-size: 1rem;
  color: #ffffff;
  opacity: 1;
}
.navlink:hover {
  background-color: rgba(75, 85, 99, 0.5);
}
</style>
