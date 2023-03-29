<template>
  <section class="container-fluid px-lg-5">
    <div class="row">
      <div class="col-12">
        <special-heading text="Process" class="section-heading"/>
      </div>
      <div class="row heading-section">
        <div class="col-lg-5 ">
          <large-bold-heading text="The Journey To Your Beauty" />
        </div>
        <div class="col-lg-5 offset-lg-2">
          <basic-paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
      </div>
      <div class="row gap-3 justify-content-center align-items-center">
        <process-card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta phasellus tempus, malesuada massa. Tortor mattis a lectus egestas eget donec quis ligula eget. In habitant risus nisi, venenatis. " heading="Planning" />
        <process-card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta phasellus tempus, malesuada massa. Tortor mattis a lectus egestas eget donec quis ligula eget. In habitant risus nisi, venenatis. " heading="Brainstorming" />
        <process-card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta phasellus tempus, malesuada massa. Tortor mattis a lectus egestas eget donec quis ligula eget. In habitant risus nisi, venenatis. " heading="Targeting" />
      </div>
    </div>
  </section>
</template>

<script>
import SpecialHeading from "../headings/special-heading.vue";
import LargeBoldHeading from "../headings/large-bold-heading.vue";
import BasicParagraph from "../paragraphs/basic-paragraph.vue";
import ProcessCard from "../cards/process-card.vue";

export default {
  name: "process-section",
  components: {ProcessCard, BasicParagraph, LargeBoldHeading, SpecialHeading}
}
</script>

<style scoped>
.section-heading{
  margin-bottom: 80px;
}
.heading-section{
  margin-bottom: 40px;
}
</style>