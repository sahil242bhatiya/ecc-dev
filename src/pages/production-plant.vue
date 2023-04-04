<template>
    <div>
        <production-plant-hero-section />
    </div>
</template>

<script>
import MainHeroSection from "../components/hero-sections/main-hero-section.vue";
import ProductionPlantHeroSection from "../components/production-plantPage/production-plant-hero-section.vue";

export default {
    name: "production-plant",
    components: {ProductionPlantHeroSection, MainHeroSection}
}
</script>

<style scoped>

</style>