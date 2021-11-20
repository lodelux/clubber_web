<template>
  <div class="contain">
    <div class="w-max">
      <h2>Prenotazione in discoteca</h2>
      <br />
      <h1>SEMPLICE</h1>
    </div>
    <a href="#story" class="text-white font-bold">
      <button class="btn">La nostra storia</button>
    </a>
    <div
      class="
        py-10
        w-full
        flex-grow-0 flex flex-col
        space-y-10
        lg:space-y-0 lg:flex-row
        items-center
        lg:justify-evenly
      "
    >
      <div v-for="card in cards" :key="card.t1">
        <div
          class="
            card
            rounded-lg
            flex flex-col
            items-center
            justify-center
            space-y-1
            p-3
          "
        >
          <h3 class="text-center">{{ card.t1 }}</h3>
          <h4 class="text-center">{{ card.t2 }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { t1: "Easy", t2: "A prova di boomer" },
        { t1: "Custom", t2: "Per ogni gusto" },
        { t1: "Fast", t2: "Cerca Tap prenota" },
      ],
    };
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
h4 {
  font: normal normal 600 1.375rem Nunito;
}
h3 {
  color: #ea0053;
  font: normal normal 600 2.25rem Nunito;
}
.card {
  min-width: 14.937rem;
  box-shadow: 0px 6px 12px #00000029;
}
.btn {
  @apply py-2;
  min-width: 11.53rem;
  background: #ea0053 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  border-radius: 10px;
}
h1 {
  @apply text-center ml-2;
  font: normal normal bold 2.25rem Nunito;
  letter-spacing: 0.6525rem;
  color: #06001e;
}
h2 {
  @apply text-center;
  font: normal normal bold 1.25rem Nunito;
  letter-spacing: 0.008375rem;
  color: #06001e;
}
.contain {
  @apply flex flex-col   items-center justify-between py-8;
  min-height: calc(100vh - 4.375rem);
}
</style>
