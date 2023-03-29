<template>
  <div class="card col-lg-4">
    <large-bold-heading class="heading" :text="heading" />
    <basic-paragraph class="mb-0" :text="text" />
  </div>
</template>

<script>
import LargeBoldHeading from "../headings/large-bold-heading.vue";
import BasicParagraph from "../paragraphs/basic-paragraph.vue";

export default {
  name: "count-process-card",
  components: {BasicParagraph, LargeBoldHeading},
  props: {
    heading: {
      type: String,
      required: true,
      default: "100+"
    },
    text: {
      type: String,
      required: true,
      default: "Text"
    }
  }
}
</script>

<style scoped>
.card{
  border: none;
}
.heading{
  font-size: 48px;
}
</style>