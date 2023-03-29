<template>
  <navbar/>
  <home />
  <Footer />
</template>

<script>
import Navbar from "./components/navbar.vue";
import Home from "./pages/home.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {Footer, Home, Navbar}
}

</script>

<style scoped>

</style>
