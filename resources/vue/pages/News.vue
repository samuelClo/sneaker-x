<template>
    <main v-if="Object.keys(news).length > 0" id="wrapperNews">
        <h1>{{news.title}}</h1>
        <p id="summary">{{news.summary}}</p>
        <p id="content">{{news.content}}</p>
    </main>
    <div id="notFound" v-else>
        Page not found
    </div>
</template>

<script>
    import {UNewsCard} from "@/components/unit";

    import {mapGetters} from 'vuex'

    export default {
        mounted() {
            this.$store.dispatch('news/getNews', {
                id: this.$route.params.newsId
            })
        },
        computed: {
            ...mapGetters({
                news: 'news/news',
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
    @import "News";
</style>
