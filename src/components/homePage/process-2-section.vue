<template>
<section class="container-fluid px-lg-5">
  <div class="row">
    <div class="col-lg-6">
      <img src="../../assets/white-abstract.jpg" alt="white-abstract" class="img-fluid left-image"/>
    </div>
    <div class="col-lg-6">
      <div class="row">
        <div class="col-12">
          <large-bold-heading text="Enabled & Powered By Technology" class="large-heading" />
        </div>
        <basic-paragraph text="We will help to develop every smallest thing into a big one for your company, We will help to develop every smallest thing into a big one for your company We will help to develop every smallest thing into a big one for your company, We will help to develop every smallest thing into a big one for your company We will help to develop every smallest thing into a big one for your company." />
      </div>
      <div class="row cards-container">

      </div>
    </div>
  </div>
</section>
</template>

<script>
import LargeBoldHeading from "../headings/large-bold-heading.vue";
import BasicParagraph from "../paragraphs/basic-paragraph.vue";

export default {
  name: "process-2-section",
  components: {BasicParagraph, LargeBoldHeading}
}
</script>

<style scoped>
.img-fluid{
  max-height: 80vh;
}
.large-heading{
  margin-bottom: 20px;
}
.cards-container{
  margin-top: 110px;
}
</style>