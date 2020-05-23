<template>
    <ULink href="article" :params="{ articleId: id }" id="wrapper">
        <div id="card_shadow">
            <div id="card">
                <div id="picture" v-bind:style="stylePicture"></div>

                <div id="textWrapper">
                    <span>{{ name }}</span>
                    <span>{{ price }}€</span>
                </div>
            </div>
        </div>
    </ULink>
</template>

<script>
import { ULink } from "@/components/unit";

const imgPath = "vivienne-westwood-asics-hyperdel-lyte-04_vylwcw.jpg"

export default {
    data() {
        return {
            stylePicture: {
                backgroundImage: `url("/storage/img/${this.picture}")`
            }
        };
    },
    methods: {},
    props: {
        name: {
            required: true,
            type: String
        },
        price: {
            required: true,
            type: Number
        },
        picture: {
            required: true,
            type: String
        },
        id: {
            required: true,
            type: Number
        }
    },
    components: {
        ULink
    }
};
</script>

<style lang="scss" scoped>
@import "UProductCard";
</style>
