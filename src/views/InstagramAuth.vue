<template>
  <div class="cont w-full">
    <div
      class="
        flex flex-col
        w-full
        items-center
        h-full
        justify-start
        pt-12
        space-y-3
      "
    >
      <text-logo color="black" />
      <h3 class="text-center px-4 pb-12">
        Accesso completato
        <br />
        <br />
        clicca il bottone per tornare all' app e completare la sincronizzazione
        dei dati
      </h3>
      <a
        :href="
          'https://clubber.page.link/?link=https%3A%2F%2Fclubberpeople.com%2Finstagram_auth%3Fcode%3D' + payload._code + '&apn=com.pbsoftware.clubber&amv=1&ibi=com.clubberapp.clubber&isi=1582459758&imv=2'
        "
        ><button>Torna all' App</button>
      </a>
    </div>
  </div>
</template>

<script>
import textLogo from "../components/textLogo.vue";
export default {
  components: { textLogo },
  data() {
    return {
      payload: {
        _code: "",
        status: 500,
      },
    };
  },
  mounted() {
    try {
      if (this.$route.query.code) {
        this.payload._code = this.$route.query.code;
        this.payload.status = 200;
      } else {
        throw "undefined";
      }
    } catch (error) {
      this.payload._code = error;
      this.payload.status = 400;
    }
  },
};
</script>

<style scoped>
button {
  @apply py-3 px-10 mb-6;
  border-radius: 10px;
  background: #ea0053 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  font: normal normal bold 1rem Nunito;
  color: #ffffff;
  opacity: 1;
}

.foot {
  display: none;
}
h3 {
  @apply inline;
  font: normal normal normal 1rem Nunito;
}
h2 {
  @apply inline-block mt-3;
  font: normal normal bold 1rem Nunito;
}
.cont {
  height: calc(100vh - 4.375rem);
  background: transparent url("../assets/contacts.svg") no-repeat;
  background-size: 1920px;
  background-position-x: 50%;
  background-position-y: bottom;
  opacity: 1;
}
</style>
