<template>
  <div
    v-if="isMobile"
    @click="
      position == 'Home' && data.id != undefined
        ? this.$router.push(`/${data.type}/${data.id}`)
        : ''
    "
    class="flex-shrink-0 flex-col space-y-2"
    :class="position == 'Home' ? 'cursor-pointer' : ''"
  >
    <div
      class="flex-shrink"
      v-if="data.isDummy"
      :class="data.type == 'night' ? 'night' + position : 'club' + position"
    ></div>
    <img
      v-if="data.id != undefined"
      :src="data.cover_link[0]"
      :class="data.type == 'night' ? 'night' + position : 'club' + position"
    />
    <h1 v-if="data.type == 'club'" class="text-center">{{ data.name }}</h1>
  </div>
  <div
    v-if="!isMobile"
    @click="
      position == 'Home' && data.id != undefined
        ? this.$router.push(`/${data.type}/${data.id}`)
        : ''
    "
    class="flex-shrink-0 flex-col space-y-2"
    :class="position == 'Home' ? 'cursor-pointer' : ''"
  >
    <div
      class="w-full h-full"
      v-if="data.isDummy"
      :class="data.type == 'night' ? 'nightD' + position : 'clubD' + position"
    ></div>
    <img
      v-if="data.id != undefined"
      :src="data.cover_link[0]"
      :class="data.type == 'night' ? 'nightD' + position : 'clubD' + position"
    />
    <h1 v-if="data.type == 'club'" class="text-center">{{ data.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ["data", "position"],
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

<style scoped>
.nightHome {
  @apply w-44  h-56 flex-shrink-0 rounded-lg shadow-xl object-cover;
}

.clubHome {
  @apply w-64 h-48  flex-shrink-0 rounded-lg shadow-xl object-cover;
}

.nightDetails {
  @apply w-44  h-56 flex-shrink-0 rounded-lg shadow-xl object-cover;
}

.clubDetails {
  @apply w-56 h-44 flex-shrink-0 rounded-lg shadow-xl object-cover;
}

.nightDHome {
  @apply flex-shrink-0 rounded-lg shadow-xl object-cover;
  width: 15rem;
  height: 20rem;
}

.clubDHome {
  @apply flex-shrink-0 rounded-lg shadow-xl object-cover;

  width: 34rem;
  height: 20rem;
}

.nightDDetails {
  @apply flex-shrink-0 rounded-lg shadow-xl object-cover;

  width: 25rem;
  height: 31rem;
}

.clubDDetails {
  @apply flex-shrink-0 rounded-lg shadow-xl object-cover;
}
</style>
