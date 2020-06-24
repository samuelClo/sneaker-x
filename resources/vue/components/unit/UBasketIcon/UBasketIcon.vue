<template>

    <ULink id="wrapper" href="basket">
        <!-- global style class -->
        <img
            src="@/assets/pictures/logos/logo-basket.svg"
            alt="Access to the basket page"
            class="useful_links_logos"
        />
        <span id="articleNumber">{{articleNumber}}</span>
    </ULink>
</template>

<script>
    import { ULink } from '@/components/unit'

    export default {
        data: function () {
            return {

            }
        },
        methods: {},
        mounted() {
           // console.log(this.articleNumber)
        },
        props: {
            articleNumber: {
                type: Number,
                required: true,
            }
        },
        components: {
            ULink
        }
    }
</script>

<style  lang="scss" scoped>
    @import "UBasketIcon";
</style>
