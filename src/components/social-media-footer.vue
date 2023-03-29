<template>
  <div class="row justify-content-start align-items-center gap-3">
    <a class="social-media-icon">
      <facebook-icon/>
    </a>
    <a class="social-media-icon">
      <twitter-icon/>
    </a>
    <a class="social-media-icon">
      <instagram-icon/>
    </a>
    <a class="social-media-icon">
      <pinterest-icon />
    </a>
  </div>
</template>

<script>
import FacebookIcon from "../icons/facebook-icon.vue";
import InstagramIcon from "../icons/instagram-icon.vue";
import PinterestIcon from "../icons/pinterest-icon.vue";
import TwitterIcon from "../icons/twitter-icon.vue";

export default {
  name: "social-media-footer",
  components: {TwitterIcon, PinterestIcon, InstagramIcon, FacebookIcon}
}
</script>

<style scoped>
div{
  margin-bottom: 28px;
}
.social-media-icon{
  width: 38px;
  height: 38px;
  background: var(--light-pink);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

</style>