<template>
  <div class="wrap">
    <div class="w-full text-center px-3">
      <h1>Una sola missione</h1>
      <br />
      <h2>Rendere la discoteca semplice.</h2>
      <br />
      <h3>
        Non abbiamo altro obiettivo che poter andare a ballare senza dover
        impazzire per trovare una prevendita, un tavolo o anche solo mettersi in
        lista. <br><br>Fai tutto da una singola applicazione: trova la serata, mettiti
        in lista, divertiti. Easy as it is
      </h3>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Splash",
});
</script>

<style scoped>
h3 {
  font: normal normal normal 1rem Nunito;
}
h2 {
  font: normal normal bold 1.5rem Nunito;
}
h1 {
  @apply py-8;
  font: normal normal bold 2.5rem Nunito;
  color: #171424;
}
.wrap {
  @apply w-full pb-10;
}
</style>
