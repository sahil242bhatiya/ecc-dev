<template>
  <mouse-follow />
  <navbar/>
  <home />
  <Footer />
</template>

<script>
import Navbar from "./components/navbar.vue";
import Home from "./pages/home.vue";
import Footer from "./components/footer.vue";
import SpecialHeading from "./components/headings/special-heading.vue";
import MouseFollow from "./components/extras/mouse-follow.vue";
export default {
  name: "App",
  components: {MouseFollow, SpecialHeading, Footer, Home, Navbar},
  mounted() {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }
}

</script>

<style scoped>

</style>
