<template>
    <div>
        <technology-hero-section />
    </div>
</template>

<script>
import MainHeroSection from "../components/hero-sections/main-hero-section.vue";
import TechnologyHeroSection from "../components/technologyPage/technology-hero-section.vue";

export default {
    name: "technology",
    components: {TechnologyHeroSection, MainHeroSection},
    beforeCreate() {
        document.title = "Ecc Dev | Technology";
    }
}
</script>

<style scoped>

</style>