<template>
    <main id="wrapperHome">
<!--        <SCarouselProduct :productsPicture="arrivagePicture" :products-text="arrivageText" id="carousel-test"/>-->
        <div id="productGrid" class="grid">
            <UProductCard
                v-for="product in randomProducts"
                :key="product.id"
                :name="product.name"
                :picture="product.image"
                :price="product.price"
                :id="product.id"
            />
        </div>
        <div id="newsGrid" class="grid">
            <UNewsCard
                v-for="news in lastNews"
                :key="news.id"
                :title="news.title"
                :date="news.updated_at ? news.updated_at : news.created_at"
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

    import {mapGetters} from 'vuex'
    import moment from 'moment';

    console.log(moment(' 2020-06-20T19:55:40.000000Z€').format('FR-fr'))

    export default {
        data() {
            return {
                // arrivage,
                // arrivagePicture: [],
                // arrivageText: [],
                // dixProduitsAleatoire,
                // cinqNewsLast
            }
        },
        mounted() {
            // this.arrivage.forEach(el => {
            //     this.arrivagePicture.push(el.image)
            //     this.arrivageText.push(el.name)
            // })

            this.$store.dispatch('products/getRandomProducts', {
                value: 10,
            })

            this.$store.dispatch('news/getQuantityNews', {
                quantity: 5,
            })
        },
        computed: {
            ...mapGetters({
                randomProducts: 'products/products',
                lastNews: 'news/allNews',
            })
        },
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
