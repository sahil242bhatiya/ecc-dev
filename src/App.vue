<template>
  <navbar/>
  <home />
  <special-heading text="About" />
  <Footer />
</template>

<script>
import Navbar from "./components/navbar.vue";
import Home from "./pages/home.vue";
import Footer from "./components/footer.vue";
import SpecialHeading from "./components/headings/special-heading.vue";
export default {
  name: "App",
  components: {SpecialHeading, Footer, Home, Navbar}
}

</script>

<style scoped>

</style>
