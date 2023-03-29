<template>
  <h1>
    {{text}}
  </h1>
</template>

<script>
export default {
  name: "heading-main",
  props: {
    text: {
      type: String,
      default: "Heading"
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 48px;
  font-weight: 300;
  font-family: 'Merriweather', serif;
  text-transform: capitalize;
}
</style>