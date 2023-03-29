<template>
  <div class="card d-flex flex-column col-lg-4">
    <div class="">
      <img src="../../assets/service-img-1.jpg" alt="service-img-1" class="img-fluid">
      <large-bold-heading class="fs-5" text="Reasearch & Development"/>
      <basic-paragraph class="custom-text" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text"/>
    </div>
    <div>
      <a>
        Read More <right-arrow-icon />
      </a>
    </div>
  </div>
</template>

<script>
import LargeBoldHeading from "../headings/large-bold-heading.vue";
import BasicParagraph from "../paragraphs/basic-paragraph.vue";
import RightArrowIcon from "../../icons/right-arrow-icon.vue";

export default {
  name: "service-card",
  components: {RightArrowIcon, BasicParagraph, LargeBoldHeading}
}
</script>

<style scoped>
.card {
  padding: 20px;
  max-height: 80vh;
  height: 568px;
  box-shadow: 0px 4px 100px rgba(74, 148, 154, 0.1);
  border: none;
  z-index: 3;
  justify-content: space-between;
  max-width: 350px;
}
.fs-5{
  margin-top: 6px;
}
.custom-text{
  color: #362A43;
  opacity: 0.8;
}

a svg{
  transition: all .3s;
}

a:hover svg{
  transform: translateX(5px);
}

</style>