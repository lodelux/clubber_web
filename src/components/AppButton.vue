<template>
  <a
    v-if="device == 'android' || device == 'unrecognized'"
    href="https://play.google.com/store/apps/details?id=com.pbsoftware.clubber&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
    ><img
      alt="Disponibile su Google Play"
      src="https://play.google.com/intl/en_us/badges/static/images/badges/it_badge_web_generic.png"
      style="width: 250px"
  /></a>
  <a

    v-if="device == 'iphone' || device == 'unrecognized'"
    href="https://apps.apple.com/it/app/clubber/id1582459758?itsct=apps_box_badge&amp;itscg=30200"
    style="border-radius: 13px; width: 250px; height: 83px"
    ><img
      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/it-it?size=250x83&amp;releaseDate=1649980800&h=41b21f7c9434e3f82c02a4d9eb1cc8d3"
      alt="Download on the App Store"
      style="border-radius: 13px; width: 250px; height: 83px"
  /></a>
</template>

<script>
export default {
  computed: {
    device() {
      if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
        return "android";
      }
      if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
        return "iphone";
      }

      return "unrecognized";
    },
  },
};
</script>

<style scoped></style>
