<template>
    <div>
        <portfolio-hero-section/>
    </div>
</template>

<script>
import PortfolioHeroSection from "../components/portfolioPages/portfolio-hero-section.vue";

export default {
    name: "portfolio",
    components: {PortfolioHeroSection},
    beforeCreate() {
        document.title = "Ecc Dev | Portfolio";
    }
}
</script>

<style scoped>

</style>