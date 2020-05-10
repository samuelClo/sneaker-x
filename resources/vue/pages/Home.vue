<template>
    <main>
        <SCarouselProduct id="carousel" :products="arrivage" />
        <div id="productGrid">
            <UProductCard
                v-for="product in dixProduitsAleatoire"
                :key="product.id"
                :name="product.name"
                :picture="product.image"
                :price="product.price"
                :id="product.id"
            />
        </div>
    </main>
</template>

<script>
import { arrivage, dixProduitsAleatoire } from "@/fakedata/fake.data";

import { SCarouselProduct } from "@/components/structural";
import { UProductCard } from "@/components/unit";

export default {
    data() {
        return {
            arrivage,
            dixProduitsAleatoire
        };
    },
    mounted() {
        console.log(arrivage);
    },
    computed: {},
    components: {
        SCarouselProduct,
        UProductCard
    }
};
</script>

<style lang="scss" scoped>
@use "Home";
</style>
