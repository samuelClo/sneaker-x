<template>
    <div id="wrapper">
        <carousel :per-page="1" :mouse-drag="false">
            <slide class="slide" v-for="(product, i) in products" :key="i">
                <img
                    class="picture"
                    src="@/assets/pictures/img/adidas-ultraboost-dna-leather-white-eh1210-pic1-1100x771_lbmvjm.jpg"
                />
                <span class="text">{{ product.name }}</span>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    props: {
        products: {
            required: true,
            type: Array
        }
    },
    components: {
        Carousel,
        Slide
    }
};
</script>

<style lang="scss" scoped>
@import "SCarouselProduct";
</style>
