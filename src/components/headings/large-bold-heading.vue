<template>
    <h2>
        {{ text }}
    </h2>
</template>

<script>
export default {
    name: "large-bold-heading",
    props: {
        text: {
            type: String,
            default: "Heading"
        }
    }
}
</script>

<style scoped>
h2 {
    font-size: 64px;
    font-weight: 700;
    font-family: 'Merriweather', serif;
    text-transform: capitalize;
    color: var(--dark-blue);
}
</style>