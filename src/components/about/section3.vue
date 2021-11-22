<template>
  <div class="banner w-full py-10 px-6 lg:px-24">
    <span class="block w-full"
      >Non più di tre mosse ti dovevano separare dalla tua serata:</span
    >
    <div
      class="
        py-10
        lg:space-x-5
        w-full
        flex-grow-0 flex flex-col
        space-y-10
        lg:space-y-0 lg:flex-row
        items-center
        lg:justify-between
      "
    >
      <div v-for="card in cards" :key="card.t1">
        <div
          class="
            card
            rounded-lg
            flex flex-col
            items-start
            justify-center
            space-y-1
            p-6
          "
        >
          <h1 class="text-center">{{ card.t1 }}</h1>
          <h2 class="text-center">{{ card.t2 }}</h2>
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
        {
          t1: "Trova",
          t2: "la tua serata",
        },
        {
          t1: "Personalizza",
          t2: "la tua prenotazione",
        },
        {
          t1: "Paga in app",
          t2: "in tutta sicurezza",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  color: #06001e;
}
h1 {
  color: #ea0053;
}
.card {
  background-color: white;
  min-width: 17.18rem;
}
.banner {
  background: #EA0053 0% 0% no-repeat padding-box;
  font: normal normal 600 1.5625rem Nunito;
  color: white;
}
</style>
