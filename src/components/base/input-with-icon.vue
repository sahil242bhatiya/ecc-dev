<template>
  <div>
    <slot name="icon"></slot>
    <input type="text" class="input" :placeholder="placeHolder">
  </div>
</template>

<script>
import SearchIcon from "../../icons/search-icon.vue";

export default {
  name: "input-with-icon",
  components: {SearchIcon},
  props: {
    placeHolder: {
      type: String,
      default: "Placeholder"
    }
  }
}
</script>

<style scoped>

</style>