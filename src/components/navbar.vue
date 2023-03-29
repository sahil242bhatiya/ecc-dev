<template>
  <nav class="container-fluid px-lg-5">
    <div class="max-container">
      <div class="border-bottom container-fluid upper-container">
        <div class="row justify-content-lg-between align-items-center">
          <div class="col-1">
            <hamburger-icon class="hamburger-icon"/>
          </div>
          <div class="col-2">
            <company-logo class="logo"/>
          </div>
          <div class="col-2">
            <button class="pink-button request-btn ff-urbanist">
              Request Sample
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="max-container">
      <nav-links-container/>
    </div>
  </nav>
</template>

<script>
import CompanyLogo from "../icons/company-logo.vue";
import HamburgerIcon from "../icons/hamburger-icon.vue";
import NavLinksContainer from "./nav-links-container.vue";

export default {
  name: "navbar",
  components: {NavLinksContainer, HamburgerIcon, CompanyLogo}
}
</script>

<style scoped>
nav {
  position: relative;
  top: 0;
  background-color: #fff;
}

.logo {
  width: 351px;
  height: 90px;
}

.hamburger-icon {
  width: 24px;
  height: 24px;
}

.request-btn {
  padding: 14px 30px;
  border-radius: 36px;
}

.upper-container {
  padding-top: 12px;
  padding-bottom: 28px;
  padding-inline: 0 !important;
}

.border-bottom {
  border-bottom: 1px solid #272727 !important;
}
</style>