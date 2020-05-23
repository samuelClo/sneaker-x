<template>
    <article id="wrapper">
        <img :src="`/storage/img/${product.image}`" alt="Product picture" />
        <aside id="assets_wrapper">
            <h3>{{ product.name }}</h3>
            <span id="price">
                {{ product.price }}
            </span>
            <SSizeSelect :sizes="product.sizes" @onClick="handleSelect" />
            <UButton
                size="large"
                content="ADD"
                @click="addToBasket"
            />
        </aside>
    </article>
</template>

<script>
import { SSizeSelect } from "@/components/structural";
import { UButton } from "@/components/unit";

export default {
    data() {
        return {
            product: {
                name: "Air Jordan 1 Mid",
                brand: "Jordan",
                color: "Alternate Swoosh",
                description:
                    "Cette version mid de la populaire Air Jordan 1 est dotée d’une empeigne en cuir, affichant une combinaison intemporelle de noir et de blanc. On découvre ensuite des swoos en cuir verni, déclinés en rouge sur les côtés extérieurs et en jaune à l’intérieur. Un Jumpman sur la languette, un logo Wings gravé au niveau de la cheville, ainsi qu'une semelle blanche combinée à une outsole vert émeraude, finalisent le design de Peter Moore.",
                price: 110,
                release_date: "2020-04-18",
                image:
                    "air-jordan-1-mid-alternate-swoosh-bq6472-063-pic1_zd4ibz.jpg",
                brand_id: 2,
                sizes: [40, 40.5, 42, 42.5, 43, 44, 44.5, 45, 45.5]
            },
            selectedProduct: {
                size: null
            }
        };
    },
    methods: {
        handleSelect(size) {
            this.selectedProduct.size = size;
        },
        addToBasket() {
            console.log(selectedProduct)
        }
    },
    beforeMount() {
        console.log(this.$route.params.articleId);
    },
    components: {
        SSizeSelect,
        UButton
    }
};
</script>

<style lang="scss" scoped>
@use "Article";
</style>
