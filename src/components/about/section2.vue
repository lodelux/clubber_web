<template>
  <div id="story" class="banner flex flex-col space-y-5">
    <span class="block text-white pt-5 mx-5 lg:ml-24">
      Durante il lockdown <br />
      con la voglia di ballare e le discoteche
      <span class="big text line-through inline ml-1">CHIUSE</span>
      <br />
      pensavamo con nostalgia a tutte
      <span class="big text inline ml-1"
        >le serate pazze sgravate che ci stavamo perdendo.</span
      >
      <br />
      Poi ci è tornata in mente la
      <span class="big inline ml-1">paranoia </span>di prenotare una serata
      <br />
      tipo quando vai in una nuova città, o quando non conosci nessuno che ti
      possa far entrare (o imbucare).
    </span>
    <div class="w-full flex-grow flex items-end justify-center">
      <img src="@/assets/Chi_siamo1.png" class="hide self-center" />
      <span class="margin inline-block text-white w-2/4 self-center">
        Così è nata la voglia di rendere le discoteche più accessibili, ma
        come?<br /><br />
        <span class="big">L’idea!</span> <br /><br />Un’ applicazione che ti
        toglie la paranoia di prenotare una serata in discoteca rendendo tutto
        semplice e personalizzabile. <br /><br /><span class="big"
          >La parola d’ordine è stata semplicità
        </span>
      </span>
      <img src="@/assets/Chi_siamo2.png" class="hidden lg:inline-block" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hide {
  display: none;
}
@media (min-width: 340px) {
  .hide {
    display: inline-block;
  }
  .margin {
    @apply -ml-40 md:-ml-0;
  }
}
img {
  width: 22.5rem;
}

.big {
  @apply font-bold;
  font-size: 1.25rem;
}
.banner {
  background: #ea0053 0% 0% no-repeat padding-box;
}
</style>
