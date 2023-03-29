<template>
  <div class="d-flex center">
    <img src="../../assets/icon-logo.png" alt="logo" class="img-fluid">
    <h2 class="ff-urbanist">
      {{text}}
    </h2>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "special-heading",
  props: {
    text: {
      type: String,
      required: true,
      default: "Special Heading"
    }
  }
}
</script>

<style scoped>
.center{
  align-items: center;
}
h2{
  font-size: 32px;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-right: 10px;
}
img{
  height: 32px;
  width: auto;
  margin-right: 0 !important;
}

.line{
  width: 100%;
  height: 2px;
  background: #111111;
  margin-left: 20px;
}
</style>