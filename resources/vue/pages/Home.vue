<template>
    <main id="wrapperHome">
        <SCarouselProduct :productsPicture="arrivagePicture" :products-text="arrivageText" id="carousel-test"/>
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
    import {arrivage, dixProduitsAleatoire} from "@/fakedata/fake.data";

    import {SCarouselProduct} from "@/components/structural";
    import {UProductCard} from "@/components/unit";

    export default {
        data() {
            return {
                arrivage,
                arrivagePicture: [],
                arrivageText: [],
                dixProduitsAleatoire
            }
        },
        mounted() {
            this.arrivage.forEach(el => {
                this.arrivagePicture.push(el.image)
                this.arrivageText.push(el.name)
            })
        },
        computed: {},
        components: {
            SCarouselProduct,
            UProductCard
        }
    };
</script>

<style lang="scss">
    #wrapperHome #carousel-test #carousel {
        width: 800px;
    }
</style>
<style lang="scss" scoped>
    @use "Home";
</style>
