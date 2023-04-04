<template>
    <div>
        <about-hero-section />
    </div>
</template>

<script>
import AboutHeroSection from "../components/aboutPage/about-hero-section.vue";

export default {
    name: "about",
    components: {AboutHeroSection},
    beforeCreate() {
        document.title = "Ecc Dev | About";
    }
}
</script>

<style scoped>

</style>