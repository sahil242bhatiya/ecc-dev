<template>
    <section class="container-fluid px-lg-5">
        <div class="max-container">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <large-bold-heading :text="text" />
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <img :src="imgSrc" class="img-fluid" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import LargeBoldHeading from "../headings/large-bold-heading.vue";
import BasicParagraph from "../paragraphs/basic-paragraph.vue";
import ButtonWithUnderline from "../buttons/button-with-underline.vue";

export default {
    name: "second-hero-section",
    components: {ButtonWithUnderline, BasicParagraph, LargeBoldHeading},
    props: {
        text: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.img-fluid{
    margin-top: 80px;
}
section{
    margin-top: 190px;
}
</style>