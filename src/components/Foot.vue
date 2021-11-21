<template>
  <div class="foot flex justify-start py-6">
    <div class="text-white pt-5 pl-3 md:pl-10 flex-grow">
      <h1>Contatti</h1>
      <br />
      <h2>
        Email: <br />
        <h3>&nbsp;info@clubberpeople.com</h3>
      </h2>
      <br />
      <h2>
        Instagram:<br />
        <h3>&nbsp;@clubber_people</h3>
      </h2>
      <br />
      <h2>
        Facebook: <br />
        <h3>&nbsp;Clubber (@clubberpeople)</h3>
      </h2>
    </div>
    <div class="text-white pt-5 pl-3 pr-3 flex-grow">
      <h1>
        <a
          href="https://www.iubenda.com/termini-e-condizioni/15672760"
          target="_blank"
          >Termini e Condizioni</a
        >
      </h1>
      <br />
      <h1>
        <a
          href="https://www.iubenda.com/privacy-policy/15672760"
          target="_blank"
          >Privacy e Policy</a
        >
      </h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  @apply inline-block;
  font: normal normal normal 1rem Nunito;
}
h2 {
  @apply inline-block mt-3;
  font: normal normal bold 1rem Nunito;
}
h1 {
  font: normal normal bold 1.25rem Nunito;
}
.foot {
  @apply w-full;
  min-height: 13.21rem;
  background: #06001e 0% 0% no-repeat padding-box;
}
</style>
