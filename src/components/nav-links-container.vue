<template>
  <div class="main-menu row align-items-center">
    <div class="links-container">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Production</li>
        <li>Environment</li>
        <li>Technology</li>
        <li>Portfolio</li>
        <li>News</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="input-container">
      <search-input class="search-input" />
    </div>
  </div>
</template>

<script>
import SearchInput from "./search-input.vue";

export default {
  name: "nav-links-container",
  components: {SearchInput}
}
</script>

<style scoped>
.links-container{
  width: 65%;
  padding: 0 !important;
}
.input-container{
  width: 30%;
  padding: 0 !important;
  display: flex;
  justify-content: end;
}
.links-container ul{
  display: flex;
  list-style: none;
  gap: 36px;
  padding: 0;
  margin: 0;
}
.main-menu{
  height: 80px;
  justify-content: space-between;
  padding-inline: 10px;
}
.search-input{
  margin-right: 0;
}

@media (max-width: 1024px) {
  .main-menu{
    display: none;
  }
}
</style>