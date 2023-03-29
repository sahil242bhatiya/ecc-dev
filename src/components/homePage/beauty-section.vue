<template>
  <section class="container-fluid px-lg-5">
    <div class="max-container">
      <div class="row">
        <div class="col-10">
          <large-bold-heading text="We act to shape the future of beauty, leveraging science & technology" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LargeBoldHeading from "../headings/large-bold-heading.vue";

export default {
  name: "beauty-section",
  components: {LargeBoldHeading}
}
</script>

<style scoped>
section{
  padding-block: 150px;
  background: url("../../assets/beauty-section-bg.png") repeat !important;
  background-size: 100% !important;
  min-height: 500px !important;
}
</style>