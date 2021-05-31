<template>
  <div class="home">
    <HeaderMoelaikeun />
    <HeroMoelaikeun />
    <BannerMoelaikeun />
    <InstaMoelaikeun />
    <PartnerMoelaikeun />
    <FooterMoelaikeun />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderMoelaikeun from "@/components/HeaderMoelaikeun.vue";
import HeroMoelaikeun from "@/components/HeroMoelaikeun.vue";
import BannerMoelaikeun from "@/components/BannerMoelaikeun.vue";
import InstaMoelaikeun from "@/components/InstaMoelaikeun.vue";
import PartnerMoelaikeun from "@/components/PartnerMoelaikeun.vue";
import FooterMoelaikeun from "@/components/FooterMoelaikeun.vue";

export default {
  name: "Home",
  components: {
    HeaderMoelaikeun,
    HeroMoelaikeun,
    BannerMoelaikeun,
    InstaMoelaikeun,
    PartnerMoelaikeun,
    FooterMoelaikeun
  },
};
</script>
