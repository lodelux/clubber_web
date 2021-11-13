<template>
  <div class="foot flex flex-col">
    <div class="flex flex-grow my-5">
      <div class="border-r border-white text-white w-full pt-5 pl-6 pr-3 md:pl-11">
        <h1>Contatti</h1>
        <br />
        <br />
        <h2>
          Email:
          <h3>clubber@clubber.it</h3>
        </h2>
        <br />
        <h2>
          Instagram:
          <h3>@clubber</h3>
        </h2>
        <br />
        <h2>
          Facebook:
          <h3>clubber</h3>
        </h2>
      </div>
      <div class="border-r border-white text-white w-full pt-5 pl-11">
        <h1>Contatti</h1>
      </div>
    </div>
    <div class="mt-3 border-t border-white text-center px-4 py-8">
      <h3 >ajo daje Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  @apply inline;
  font: normal normal normal 16px/21px Nunito;
  letter-spacing: 0.24px;
    color: #ffffff;

}
h2 {
  @apply inline-block mt-3;
  font: normal normal bold 16px/21px Nunito;
  letter-spacing: 0.24px;
  color: #ffffff;
}
h1 {
  font: normal normal bold 20px/21px Nunito;
  letter-spacing: 0.3px;
  color: #ffffff;
}
.foot {
  @apply w-full;
  min-height: 360px;
  background: #06001e 0% 0% no-repeat padding-box;
}
</style>
