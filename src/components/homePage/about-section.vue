<template>
  <div class="container-fluid px-lg-5">
    <div class="row">
      <div class="col-12">
        <special-heading text="About" class="section-heading"/>
      </div>
      <div class="col-lg-7">
        <large-bold-heading class="fs-3" text="WE SEEK TO OPTIMISE THE SYNERGY BETWEEN GOOD AESTHETICS, STRUCTURE AND ENVIRONMENTAL MANUFACTURING"/>
        <img src="../../assets/medicine.jpg" alt="medicine" class="img-fluid left-image"/>
        <basic-paragraph text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
      </div>
      <div class="col-lg-5">
        <img src="../../assets/water.jpg" alt="water" class="img-fluid right-image"/>
        <basic-paragraph text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." />
      </div>
    </div>
  </div>
</template>

<script>
import SpecialHeading from "../headings/special-heading.vue";
import LargeBoldHeading from "../headings/large-bold-heading.vue";
import BasicParagraph from "../paragraphs/basic-paragraph.vue";

export default {
  name: "about-section",
  components: {BasicParagraph, LargeBoldHeading, SpecialHeading}
}
</script>

<style scoped>
.section-heading{
  margin-bottom: 42px;
}
.left-image{
  margin-top: 53px;
  margin-bottom: 53px;
}
.right-image{
  margin-bottom: 53px;
}
</style>