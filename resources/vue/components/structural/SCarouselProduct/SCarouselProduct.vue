<template>
    <div>
        <carousel
            id="wrapper"
            :per-page="1"
            :autoplay="true"
            :autoplayHoverPause="true"
            :navigationEnabled="true"
            :navigationClickTargetSize="20"
            :mouse-drag="true"
            :loop="true"
        >
            <slide class="slide" v-for="(product, i) in products" :key="i">
                <img
                    class="picture"
                    :src="`/storage/img/${product.image}`"
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
