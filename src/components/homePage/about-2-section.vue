<template>
  <div class="container-fluid px-lg-5">
    <div class="max-container">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <large-bold-heading text="We’re Ready to Build A Better World" />
        </div>
        <div class="col-lg-5 offset-lg-2">
          <basic-paragraph class="mb-5" text="We will help to develop every smallest thing into a big one for your company, We will help to develop every smallest thing into a big one for your company" />
          <button-with-underline text="About Us" class="blue" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <img src="../../assets/females.jpg" alt="founders" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LargeBoldHeading from "../headings/large-bold-heading.vue";
import BasicParagraph from "../paragraphs/basic-paragraph.vue";
import ButtonWithUnderline from "../buttons/button-with-underline.vue";

export default {
  name: "about-2-section",
  components: {ButtonWithUnderline, BasicParagraph, LargeBoldHeading}
}
</script>

<style scoped>
.img-fluid{
  margin-top: 80px;
}
</style>