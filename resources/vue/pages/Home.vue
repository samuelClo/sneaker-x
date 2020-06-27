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
        <h1>Actualité</h1>
        <div id="newsGrid" class="grid">
            <UNewsCard
                v-for="news in lastNews"
                :key="news.id"
                :title="news.title"
                :date="moment(news.published_at).format('YYYY-MM-DD')"
                :summary="news.summary"
                :id="news.id"
            />
        </div>
    </main>
</template>

<script>
    import {SCarouselProduct} from "@/components/structural";
    import {UProductCard, UNewsCard} from "@/components/unit";

    import moment  from 'moment'
    import {mapGetters} from 'vuex'

    const truc = '2020-06-23T08:50:21.000000Z€'


    console.log(moment())


    export default {
        data() {
            return {
                moment: moment
            }
        },
        mounted() {
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
