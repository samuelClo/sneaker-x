<template>
    <article id="product_page">
        <SCarouselProduct
            id="test"
            :products-picture="product.images"
            :navigationEnabled="false"
        />
        <aside id="assets_wrapper">
            <h3>{{ product.name }}</h3>
            <div id="price">{{ product.price }} €</div>
            <span>Size : </span>
            <SSizeSelect :sizes="product.sizes" @onClick="handleSelect" />
            <div id="select_wrapper">
                <span>Quantity : </span>
                <input
                    type="number"
                    v-model="selectedProduct.quantity"
                    value="1"
                />
            </div>
            <UColorPicker @onColorChange="changeColor"/>
            <UButton size="large" content="ADD" @click="addToBasket" />
        </aside>
    </article>
</template>

<script>
import { SSizeSelect, SCarouselProduct } from "@/components/structural";
import { UColorPicker, UButton } from "@/components/unit";

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
                images: [
                    "air-jordan-1-mid-alternate-swoosh-bq6472-063-pic1_zd4ibz.jpg",
                    "air-jordan-1-low-se-black-laser-blue-ck3022-004-pic01_vghl4c.jpg",
                    "melody-ehsani-air-jordan-womens-CQ2514-005-pic01_o37arh.jpg"
                ],
                brand_id: 2,
                sizes: [40, 40.5, 42, 42.5, 43, 44, 44.5, 45, 45.5]
            },
            selectedProduct: {
                size: null,
                quantity: 1,
                color: null,
            }
        };
    },
    methods: {
        handleSelect(size) {
            this.selectedProduct.size = size;
        },
        addToBasket() {
            console.log(this.selectedProduct);
        },
        changeColor(color) {
            this.selectedProduct.color = color
        }
    },
    beforeMount() {
        console.log(this.$route.params.articleId);
    },
    components: {
        SSizeSelect,
        UButton,
        SCarouselProduct,
        UColorPicker,
    }
};
</script>
<style lang="scss">
#test {
    flex: 5;
}
#product_page #carousel {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
}
</style>
<style lang="scss" scoped>
@import "Article";
</style>
