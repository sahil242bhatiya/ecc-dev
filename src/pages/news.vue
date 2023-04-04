<template>
<div>
    <news-hero-section />
</div>
</template>

<script>
import NewsHeroSection from "../components/newsPage/news-hero-section.vue";

export default {
    name: "news",
    components: {NewsHeroSection},
    beforeCreate() {
        document.title = "Ecc Dev | News";
    }
}
</script>

<style scoped>

</style>