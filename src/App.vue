<template>
  <navbar/>
  <home />
  <Footer />
</template>

<script>
import Navbar from "./components/navbar.vue";
import Home from "./pages/home.vue";
import Footer from "./components/footer.vue";
import SpecialHeading from "./components/headings/special-heading.vue";
export default {
  name: "App",
  components: {SpecialHeading, Footer, Home, Navbar},
  mounted() {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }
}

</script>

<style scoped>

</style>
