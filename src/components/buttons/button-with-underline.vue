<template>
  <button>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "button-with-underline",
  props: {
    text: {
      type: String,
      required: true,
      default: "Button"
    }
  }
}
</script>

<style scoped>
button {
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  padding-right: 34px;
}

button::after {
  position: absolute;
  content: "";
  display: block;
  top: 100%;
  right: 0;
  width: 100%;
  height: 4px;
  background: #000;
  transition: all .5s;
}

button:hover::after {
  width: 30px;
  height: 30px;
  right: 0;
  top: 0;
  opacity: .1;
}

.blue {
  color: var(--blue) !important;
}

.blue::after {
  background: var(--blue) !important;
}

</style>