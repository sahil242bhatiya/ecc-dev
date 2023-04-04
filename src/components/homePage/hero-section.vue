<template>
    <main-hero-section background-image="./assets/hero-images/hero-section-bg.webp" text="Like Humans, each brand is beautiful in its own way" />
</template>

<script>
import HeadingMain from "../headings/heading-main.vue";
import MainHeroSection from "../hero-sections/main-hero-section.vue";

export default {
    name: "hero-section",
    components: {MainHeroSection, HeadingMain}
}
</script>

<style scoped>


</style>