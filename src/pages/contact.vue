<template>
<div>
    <contact-hero-section />
</div>
</template>

<script>
import ContactHeroSection from "../components/contactPage/contact-hero-section.vue";

export default {
    name: "contact",
    components: {ContactHeroSection},
    beforeCreate() {
        document.title = "Ecc Dev | Contact";
    }
}
</script>

<style scoped>

</style>