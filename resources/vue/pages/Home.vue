<template>
    <main id="wrapperHome">
<!--        <SCarouselProduct :productsPicture="arrivagePicture" :products-text="arrivageText" id="carousel-test"/>-->
        <SCardList :products="randomProducts"/>
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
    import {SCarouselProduct, SCardList} from "@/components/structural";
    import {UProductCard, UNewsCard} from "@/components/unit";

    import moment  from 'moment'
    import {mapGetters} from 'vuex'


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
            UNewsCard,
            SCardList
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
