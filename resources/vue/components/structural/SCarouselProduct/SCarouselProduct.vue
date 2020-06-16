<template>
    <div>
        <carousel
            id="carousel"
            :per-page="1"
            :autoplay="true"
            :autoplayHoverPause="true"
            :navigationEnabled="navigationEnabled"
            :navigationClickTargetSize="20"
            :mouse-drag="true"
            :loop="true"
        >
            <slide class="slide" v-for="(productPicture, i) in productsPicture" :key="i">
                <img
                    class="picture"
                    :src="`/storage/img/${productPicture}`"
                />
                <span v-if="productsText && productsText[i]" class="text">{{ productsText[i] }}</span>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    props: {
        productsPicture: {
            required: true,
            type: Array
        },
        productsText: {
            required: false,
            type: Array
        },
        navigationEnabled: {
            required: false,
            type: Boolean,
            default: true,
        }
    },
    components: {
        Carousel,
        Slide
    },
    onMount() {
        console.log(this.productsText, this.productsPicture)
    }
};
</script>

<style lang="scss" scoped>
@import "SCarouselProduct";
</style>
