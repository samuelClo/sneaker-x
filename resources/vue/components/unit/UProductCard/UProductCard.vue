<template>
    <div
        :params="{ articleId: id }"
        id="wrapper"
        class="productCard"
        @click="handleClick"
    >
        <div id="card_shadow">
            <div id="card">
                <div id="picture" v-bind:style="stylePicture"></div>

                <div id="textWrapper">
                    <span>{{ name }}</span>
                    <span>{{ price }}€</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ULink } from "@/components/unit";

export default {
    data() {
        return {
            stylePicture: {
                backgroundImage: `url("${this.picture}")`
            }
        };
    },
    methods: {
        handleClick() {
            this.$store.dispatch('search/setIsSearching', {
                value: false,
            })
            this.$router.push({ name: 'article', params: { articleId: this.id } })
        }
    },
    props: {
        name: {
            required: true,
            type: String
        },
        price: {
            required: true,
            type: String
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
