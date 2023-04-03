<template>
  <mouse-follow />
  <navbar/>
    <router-view v-slot="{ Component, route }" >
        <transition enter-active-class="page-fade-in" leave-active-class="page-fade-out" mode="out-in" >
            <component :is="Component" id="innerApp"/>
        </transition>
    </router-view>
  <app-footer />
</template>

<script>
import Navbar from "./components/navbar.vue";
import Home from "./pages/home.vue";
import appFooter from "./components/footer.vue";
import SpecialHeading from "./components/headings/special-heading.vue";
import MouseFollow from "./components/extras/mouse-follow.vue";
export default {
  name: "App",
  components: {MouseFollow, SpecialHeading, appFooter, Home, Navbar},
  mounted() {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }
}

</script>

<style scoped>

</style>
