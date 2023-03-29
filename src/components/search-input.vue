<template>
  <input-with-icon class="search-input" place-holder="Search">
    <template v-slot:icon>
      <search-icon class="search-icon"/>
    </template>
  </input-with-icon>
</template>

<script>
import InputWithIcon from "./base/input-with-icon.vue";
import SearchIcon from "../icons/search-icon.vue";

export default {
  name: "search-input",
  components: {SearchIcon, InputWithIcon}
}
</script>

<style scoped>
.search-input{
  width: 338px;
  height: 48px;
  border: 1px solid #8C8C8C !important;
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: 25px;
}

.search-icon{
  margin-left: 28px;
}
</style>