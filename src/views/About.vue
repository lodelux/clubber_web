<template>
  <div class="px-6 pt-6 pb-15 flex-col space-y-6">
    <h1>Siamo quelli che ti fanno entrare in discoteca senza sbatti</h1>
    <h2>Scegli la serata, tap, divertiti</h2>
    <h2>
      Durante il lockdown con la voglia di ballare e le discoteche chiuse
      pensavamo con nostalgia a tutte le serate che ci stavamo perdendo. Poi ci
      siamo ricordati di tutte le volte che siamo stati rimbalzati all'ingresso
      e siamo rimasti fuori dal lovale al freddo e sentendoci degli idioti, per
      non parlare della paranoia di prenotare una serata quando vai in una nuova
      città, o quando non conosci nessuno che ti possa far entrare (o imbucare).
    </h2>
    <h2>
      Così è nata la voglia di rendere le discoteche più accessibili, ma come?
    </h2>
    <h2>L’idea!</h2>
    <h2>
      Un’ applicazione che ti toglie la paranoia di prenotare una serata in
      discoteca rendendo tutto semplice e personalizzabile.
    </h2>
    <h2>La parola d’ordine è stata semplicità</h2>
    <div class="py-6 px-4  flex justify-center items-center">
      <app-button>Scarica L'app</app-button>
    </div>
  </div>
  <div class="w-full h-96 bg-purple-500">IMMAGINE GROSSA</div>
</template>

<script>
import AppButton from "../components/AppButton.vue";
export default {
  components: { AppButton },
};
</script>

<style scoped>
h1 {
  text-align: left;
  font: normal normal bold 1.5rem/2.125rem Nunito;
  color: #171424;
}

h2 {
  text-align: left;
  font: normal normal 600 1rem/1.25rem Nunito;
  color: #06001e;
}
</style>
