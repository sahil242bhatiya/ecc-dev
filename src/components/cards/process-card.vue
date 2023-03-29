<template>
  <div class="card col-lg-3">
    <large-bold-heading class="fs-4" :text="heading" />
    <basic-paragraph :text="text" />
  </div>
</template>

<script>
import LargeBoldHeading from "../headings/large-bold-heading.vue";
import BasicParagraph from "../paragraphs/basic-paragraph.vue";

export default {
  name: "process-card",
  components: {BasicParagraph, LargeBoldHeading},
  props: {
    heading: {
      type: String,
      required: true,
      default: "Heading"
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
  border-radius: 24px;
  padding: 40px 50px;
  min-height: 360px;
  min-width: 32%;
}
.fs-4{
  margin-bottom: 16px;
}
</style>