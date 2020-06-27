<template>
    <ULink href="news" :params="{ newsId: id }">
        <div id="card">
            <img v-if="image" :src="image" :alt="title">
            <span id="title">{{ title }}</span>
            <span v-if="date" id="date"> {{ date }}</span>
            <span id="summary"> {{ summary }}</span>
            <span id="link">lire la suite</span>
        </div>
    </ULink>
</template>

<script>
    import {ULink} from '@/components/unit'

    export default {
        data: function () {
            return {}
        },
        methods: {},
        components: {
            ULink
        },
        props: {
            title: {
                required: true,
                type: String,
            },
            date: {
                required: false,
                type: String,
            },
            summary: {
                required: true,
                type: String,
            },
            image: {
                required: false,
                type: String,
            },
            id: {
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "UNewsCard";
</style>
