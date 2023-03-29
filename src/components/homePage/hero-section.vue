<template>
  <section class="container-fluid px-lg-5">
    <div class="max-container">
      <div class="mx-xl-5 row align-items-end h-100">
        <div class="col-lg-9 col-xl-7 col-xxl-5">
          <heading-main class="heading" text="Like Humans, each brand is beautiful in its own way"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeadingMain from "../headings/heading-main.vue";

export default {
  name: "hero-section",
  components: {HeadingMain}
}
</script>

<style scoped>
.container-fluid {
  background-image: url("../../assets/hero-section-bg.jpg");
  background-size: cover;
  background-position: center;
  min-height: 650px;
  max-height: 81vh;
}

.row {
  min-height: 500px;
}

.heading {
  color: #fff;
  font-weight: lighter !important;
  margin-bottom: 80px;
}

@media (min-width: 1024px) {
  .container-fluid {
    min-height: 400px;
    max-height: 70vh;
  }
  .heading{
    margin-bottom: 103px;
  }
}

@media (min-width: 1440px) {
  .container-fluid {
    height: 650px;
  }
  .heading{
    margin-bottom: 103px;
  }
}

</style>