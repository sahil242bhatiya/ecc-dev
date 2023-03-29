<template>
  <div class="dot-container" id="follow-mouse">
    <div class="outer-line">
      <div class="dot"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mouse-follow",
  mounted() {
    const mouse = document.getElementById("follow-mouse");

    mouse.addEventListener("click", () => {
      mouse.classList.add("link-grow");
      setTimeout(() => {
        mouse.classList.remove("link-grow");
      }, 500);
    });


    document.addEventListener("mousemove", (e) => {
      mouse.style.top = (e.pageY - 40) + "px";
      mouse.style.left = (e.pageX - 40) + "px";

      /* get hovered element */
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      if (hoveredElement.tagName === "BUTTON" || hoveredElement.tagName === "H2" || hoveredElement.tagName === "H1" || hoveredElement.tagName === "INPUT" || hoveredElement.tagName === "A"  || hoveredElement.classList.contains("hover-mouse")) {
        mouse.classList.add("link-grow");
      } else {
        mouse.classList.remove("link-grow");
      }
    });
  }

}
</script>

<style scoped>
*{
  transition: all .5s;
}
.dot-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  transition: all .00s ease-out !important;
  pointer-events: none;
}

.outer-line {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  border: 1px solid #0A67A6;
  border-radius: 50%;
  z-index: 100000;
  opacity: .5;
}

.dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  transform: translate(-50%, -50%);
  background: #0A67A6;
  border-radius: 50%;
  z-index: 100000;
}

.link-grow .dot {
  width: 80px;
  height: 80px;
  opacity: .2;
  transition-duration: 1s !important;
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    width: 80px;
    height: 80px;
    opacity: 0.2;
  }
  50% {
    width: 60px;
    height: 60px;
    opacity: 0.4;
  }
  100% {
    width: 80px;
    height: 80px;
    opacity: .2;
  }
}

.link-grow .outer-line {
  width: 30px;
  height: 30px;
  opacity: .3;
  border: 15px solid #0A67A6;
  box-shadow: 0 0 50px 1px #000000;
}

@media screen and (max-width: 992px) {
  .dot-container {
    display: none;
  }
}
</style>