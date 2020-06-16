<template>
    <ULink href="news" :params="{ newsId: id }">
        <div id="card">
            <span id="title">{{ title }}</span>
            <span id="date"> {{ date }}€</span>
            <span id="summary"> {{ summary }}</span>
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
                required: true,
                type: String,
            },
            summary: {
                required: true,
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
