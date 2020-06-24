<template>
    <main id="wrapperHome">
        <div id="newsGrid" class="grid">
            <UNewsCard
                v-for="news in allNews"
                :key="news.id"
                :title="news.title"
                :summary="news.summary"
                :image="news.image"
                :id="news.id"
            />
        </div>
    </main>
</template>

<script>
    import {UNewsCard} from "@/components/unit";

    import {mapGetters} from 'vuex'

    export default {
        mounted() {
            this.$store.dispatch('news/getAllNews')
        },
        computed: {
            ...mapGetters({
                allNews: 'news/allNews',
            })
        },
        components: {
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
    @use "AllNews";
</style>
