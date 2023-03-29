<template>
  <div>
    <hero-section />
    <our-service class="service" />
    <beauty-section class="beauty" />
  </div>
</template>

<script>
import HeroSection from "../components/homePage/hero-section.vue";
import OurService from "../components/homePage/our-service.vue";
import BeautySection from "../components/homePage/beauty-section.vue";

export default {
  name: "home",
  components: {BeautySection, OurService, HeroSection}
}
</script>

<style scoped>
.service{
  margin-bottom: 263px;
  margin-top: 224px;
}
.beauty{
  margin-bottom: 351px;
}
</style>