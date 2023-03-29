<template>
  <section class="container-fluid">
    <div class="row align-items-center">
      <div class="ps-lg-5 col-lg-4 col-xl-5">
        <large-bold-heading class="ms-lg-5" text="We are creators of beauty since forever"/>
      </div>
      <div class="col-lg-8 col-xl-7">
        <heading-main text="Our Services"/>
        <div class="row">
          <div class="col-lg-5">
            <basic-paragraph text="360 solutions that helped shape the beauty industry in the MENA region since 1985"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LargeBoldHeading from "../headings/large-bold-heading.vue";
import HeadingMain from "../headings/heading-main.vue";
import BasicParagraph from "../paragraphs/basic-paragraph.vue";

export default {
  name: "our-service",
  components: {BasicParagraph, HeadingMain, LargeBoldHeading}
}
</script>

<style scoped>

</style>