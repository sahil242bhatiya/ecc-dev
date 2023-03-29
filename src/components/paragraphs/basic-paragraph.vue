<template>
<p>
  {{text}}
</p>
</template>

<script>
export default {
  name: "basic-paragraph",
  props: {
    text: {
      type: String,
      default: "Paragraph"
    }
  }
}
</script>

<style scoped>

</style>