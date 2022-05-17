<template>
  <div
    @click="this.$router.push(`/${data.type}/${data.id}`)"
    class="flex-shrink-0 flex-col space-y-2 cursor-pointer"
  >
    <img
      :src="data.cover_link[0]"
      :class="data.type == 'night' ? 'night' : 'club'"
    />
    <h1 v-if="data.type == 'club'" class="text-center">{{ data.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style scoped>
.night {
  @apply w-44  h-56 flex-shrink-0 rounded-lg shadow-xl object-cover;
}

.club {
  @apply w-56 h-44 flex-shrink-0 rounded-lg shadow-xl object-cover;
}
</style>
