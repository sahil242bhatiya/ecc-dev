<template>
  <section class="container-fluid">
    <div class="row mx-lg-5">
      <div class="col-10">
        <large-bold-heading text="We act to shape the future of beauty, leveraging science & technology" />
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
.container-fluid{
  background-image: url("../../assets/beauty-section-bg.jpg") !important;
  background-repeat: repeat;
  min-height: 500px;
}
</style>