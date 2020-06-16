<template>
    <main id="wrapperHome">
        <SCarouselProduct :productsPicture="arrivagePicture" :products-text="arrivageText" id="carousel-test"/>
        <div id="productGrid" class="grid">
            <UProductCard
                v-for="product in dixProduitsAleatoire"
                :key="product.id"
                :name="product.name"
                :picture="product.image"
                :price="product.price"
                :id="product.id"
            />
        </div>
        <div id="newsGrid" class="grid">
            <UNewsCard
                v-for="news in cinqNewsLast"
                :key="news.id"
                :title="news.title"
                :date="news.date"
                :summary="news.summary"
                :id="news.id"
            />
        </div>
    </main>
</template>

<script>
    import {arrivage, dixProduitsAleatoire, cinqNewsLast} from "@/fakedata/fake.data";

    import {SCarouselProduct} from "@/components/structural";
    import {UProductCard, UNewsCard} from "@/components/unit";

    export default {
        data() {
            return {
                arrivage,
                arrivagePicture: [],
                arrivageText: [],
                dixProduitsAleatoire,
                cinqNewsLast
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
            UProductCard,
            UNewsCard
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
