<template>
    <div>
        <hero-section/>
        <our-service class="service"/>
        <beauty-section class="beauty"/>
        <about-section/>
        <about2-section class="about-2"/>
        <process-section class="process"/>
        <process-2-section/>
    </div>
</template>

<script>
import HeroSection from "../components/homePage/hero-section.vue";
import OurService from "../components/homePage/our-service.vue";
import BeautySection from "../components/homePage/beauty-section.vue";
import AboutSection from "../components/homePage/about-section.vue";
import ProcessSection from "../components/homePage/process-section.vue";
import Process2Section from "../components/homePage/process-2-section.vue";
import About2Section from "../components/homePage/about-2-section.vue";

export default {
    name: "home",
    components: {About2Section, Process2Section, ProcessSection, AboutSection, BeautySection, OurService, HeroSection},
    beforeCreate() {
        document.title = "Ecc Dev | Home";
    }
}
</script>

<style scoped>
.service {
    margin-bottom: 263px;
    margin-top: 224px;
}

.beauty {
    margin-bottom: 351px;
}

.process {
    margin-bottom: 185px;
}

.about-2 {
    margin-bottom: 185px;
    margin-top: 150px;
}
</style>