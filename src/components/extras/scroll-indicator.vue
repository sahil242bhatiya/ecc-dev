<template>
<div id="scrollIndicator"></div>
</template>

<script>
export default {
    name: "scroll-indicator"
}
</script>

<style scoped>
#scrollIndicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 4px;
    background: var(--light-pink-3);
    z-index: 1000;
    transition: all .3s ease-in-out;
    border-radius: 2px;
}
</style>