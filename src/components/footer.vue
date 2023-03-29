<template>
  <footer class="text-center text-lg-start">
    <div class="container-fluid text-center text-md-start mt-5  px-lg-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="align-items-center fw-bold mb-4 ff-playfair-display fs-3 links-heading">
            <img src="../assets/icon-logo.png" alt="logo" class="img-fluid border-end">
            <span class="ms-2 ff-playfair-display">
              ECCompany
              </span>
          </h6>
          <p class="para-color">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint
            <br>
            <br>
          </p>
          <p class="para-color">
            Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident foresee the pain and trouble
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="links-heading fw-bold mb-4">
            Navigate
          </h6>
            <a href="#!" class="text-reset">Home</a>
            <a href="#!" class="text-reset">Services</a>
            <a href="#!" class="text-reset">News</a>
            <a href="#!" class="text-reset">Portfolio</a>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="links-heading fw-bold mb-4">
            Company
          </h6>
            <a href="#!" class="text-reset">About Us</a>
            <a href="#!" class="text-reset">Production Plant</a>
            <a href="#!" class="text-reset">Environment</a>
            <a href="#!" class="text-reset">Technology</a>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="links-heading fw-bold mb-4">Get It Touch</h6>
          <social-media-footer />
          <a class="text-reset">
            Info@ecc-hub.com
          </a>
          <a class="text-reset">
            (021) 932 335 087
          </a>
          <p class="text-reset">
            © ecc 2022 all rights reserved
          </p>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
import SocialMediaFooter from "./social-media-footer.vue";

export default {
  name: "footer",
  components: {SocialMediaFooter}
}
</script>

<style scoped>
.container-fluid {
  padding-bottom: 130px;
  padding-top: 110px;
}
footer{
  background: url("../assets/beauty-section-bg.png");
  background-size: 100%;
}

.img-fluid.border-end {
  border-right: 1px solid #1A242D !important;
  height: 34px;
}

.links-heading {
  font-family: 'Merriweather', serif;
  font-size: 26px;
  font-weight: 400 !important;
  margin-bottom: 38px !important;
}

.text-reset {
  position: relative;
  display: block;
  font-size: 16px !important;
  color: #48545C !important;
  margin-bottom: 28px !important;
}

a.text-reset{
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

a.text-reset::after{
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  background: #1A242D;
  border-radius: 50%;
  left: 0;
  top: 50%;
  transform: scale(0) translateY(-50%);
  transform-origin: right;
  transition: all 0.3s ease-in-out;
  opacity: .5;
}

a.text-reset:hover{
  padding-left: 14px;
  font-weight: 700;
}

a.text-reset:hover::after{
  transform: scale(1) translateY(-50%);
  transform-origin: left;
}


</style>