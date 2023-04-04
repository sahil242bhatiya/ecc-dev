<template>
    <div>
        <environment-hero-section />
    </div>
</template>

<script>
import MainHeroSection from "../components/hero-sections/main-hero-section.vue";
import EnvironmentHeroSection from "../components/environmentPage/environment-hero-section.vue";

export default {
    name: "environment",
    components: {EnvironmentHeroSection, MainHeroSection},
    beforeCreate() {
        document.title = "Ecc Dev | Environment";
    }
}
</script>

<style scoped>

</style>