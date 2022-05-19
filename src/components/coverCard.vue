<template>
  <div
    @click="
      position == 'Home' ? this.$router.push(`/${data.type}/${data.id}`) : ''
    "
    class="flex-shrink-0 flex-col space-y-2"
    :class="position == 'Home' ? 'cursor-pointer' : ''"
  >
    <img
      :src="data.cover_link[0]"
      :class="data.type == 'night' ? 'night' + position : 'club' + position"
    />
    <h1 v-if="data.type == 'club'" class="text-center">{{ data.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ["data", "position"],
};
</script>

<style scoped>
.nightHome {
  @apply w-44  h-56 flex-shrink-0 rounded-lg shadow-xl object-cover;
}

.clubHome {
  @apply w-56 h-44 flex-shrink-0 rounded-lg shadow-xl object-cover;
}

.nightDetails {
  @apply w-44  h-56 flex-shrink-0 rounded-lg shadow-xl object-cover;
}

.clubDetails {
  @apply w-56 h-44 flex-shrink-0 rounded-lg shadow-xl object-cover;
}
</style>
