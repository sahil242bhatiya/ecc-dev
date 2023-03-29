<template>
  <section class="container-fluid px-lg-5">
    <div class="row">
      <div class="col-lg-6">
        <img src="../../assets/white-abstract.jpg" alt="white-abstract" class="img-fluid left-image"/>
      </div>
      <div class="col-lg-6 d-flex flex-column justify-content-between">
        <div class="row">
          <div class="col-12">
            <large-bold-heading text="Enabled & Powered By Technology" class="large-heading"/>
          </div>
          <basic-paragraph
              text="We will help to develop every smallest thing into a big one for your company, We will help to develop every smallest thing into a big one for your company We will help to develop every smallest thing into a big one for your company, We will help to develop every smallest thing into a big one for your company We will help to develop every smallest thing into a big one for your company."/>
        </div>
        <div class="row cards-container gap-4">
          <count-process-card text="Satisfied Clients" heading="350+"/>
          <count-process-card text="Delivered Produts" heading="20K+"/>
          <count-process-card text="Labs Worldwide" heading="8"/>
          <count-process-card text="Years of Experience" heading="425+"/>
          <div class="col-12">
            <button-with-underline class="blue" text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LargeBoldHeading from "../headings/large-bold-heading.vue";
import BasicParagraph from "../paragraphs/basic-paragraph.vue";
import CountProcessCard from "../cards/count-process-card.vue";
import ButtonWithUnderline from "../buttons/button-with-underline.vue";

export default {
  name: "process-2-section",
  components: {ButtonWithUnderline, CountProcessCard, BasicParagraph, LargeBoldHeading}
}
</script>

<style scoped>
.img-fluid {
  max-height: 85vh;
}

.large-heading {
  margin-bottom: 20px;
}

</style>