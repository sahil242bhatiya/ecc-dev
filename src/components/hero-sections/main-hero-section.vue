<template>
    <section class="container-fluid px-lg-5" :style="'background-image:url(' + backgroundImage + ')'">
        <div class="max-container">
            <div class="mx-xl-5 row align-items-end h-100">
                <div class="col-lg-9 col-xl-7 col-xxl-5">
                    <heading-main class="heading" :text=text />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import HeadingMain from "../headings/heading-main.vue";

export default {
    name: "main-hero-section",
    components: {HeadingMain},
    props: {
        text: {
            type: String,
            required: true,
            default: "Like Humans, each brand is beautiful in its own way"
        },
        backgroundImage: {
            type: String,
            required: true,
            default: "../../assets/hero-section-bg.jpg"
        }
    }
}
</script>

<style scoped>
.container-fluid {
    background-size: cover;
    background-position: center;
    min-height: 650px;
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
        max-height: 100vh;
    }

    .heading {
        margin-bottom: 103px;
    }
}

@media (min-width: 1440px) {
    .heading {
        margin-bottom: 103px;
    }
}
</style>