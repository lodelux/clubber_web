<template>
  <div v-if="isMobile" class="flex flex-col w-full pt-10">
    <div class="w-full px-3 text-left flex-col space-y-4">
      <h1>Una sola missione</h1>
      <h2>Rendere la discoteca semplice.</h2>
      <h3>
        Non abbiamo altro obiettivo che poter andare a ballare senza dover
        impazzire per trovare una prevendita, un tavolo o anche solo mettersi in
        lista. <br /><br />Fai tutto da una singola applicazione: trova la
        serata, mettiti in lista, divertiti. Easy as it is.
      </h3>
      <div class="flex flex-row justify-center px-2 items-center pt-4">
        <div class="w-40">
          <app-button>Scarica L'app</app-button>
        </div>
      </div>
    </div>
    <transition name="fade-in" appear>
      <img src="../../assets/Home_desktop.jpg" class="w-full" />
    </transition>
  </div>

  <div v-if="!isMobile" class="flex items-center">
    <transition name="fade-in" appear>
      <img
        src="../../assets/Home_desktop.jpg"
        class="w-1/2 flex-shrink-0 self-end"
      />
    </transition>
    <div class="w-1/2 py-10 px-20 flex-grow-0">
      <div class="w-full px-3 flex flex-col space-y-4">
        <h1>Una sola missione</h1>
        <h2>Rendere la discoteca semplice.</h2>
        <h3>
          Non abbiamo altro obiettivo che poter andare a ballare senza dover
          impazzire per trovare una prevendita, un tavolo o anche solo mettersi
          in lista. <br /><br />Fai tutto da una singola applicazione: trova la
          serata, mettiti in lista, divertiti. Easy as it is.
        </h3>
        <div class="flex flex-row items-center pt-4">
          <app-button>Scarica L'app</app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import AppButton from "../AppButton.vue";

export default defineComponent({
  components: { AppButton },
  name: "Splash",
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
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
  font: normal normal bold 2.5rem Nunito;
  color: #171424;
}
</style>
