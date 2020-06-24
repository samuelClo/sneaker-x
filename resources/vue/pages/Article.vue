<template>
    <article id="product_page">
        <SCarouselProduct
            id="test"
            v-if="product.image"
            :products-picture="product.images"
            :navigationEnabled="false"
        />
        <aside id="assets_wrapper">
            <h3>{{ product.name }}</h3>
            <div id="price">{{ product.price }} €</div>
            <span>Size : </span>
            <SSizeSelect :default="40" @onClick="handleSelect" />
            <div id="select_wrapper">
                <span>Quantity : </span>
                <input
                    type="number"
                    v-model.number="selectedProduct.quantity"
                    value="1"
                />
            </div>
            <UColorPicker @onColorChange="changeColor"/>
            <UButton size="large" content="ADD" @onClick="addToBasket" />
        </aside>
    </article>
</template>

<script>
import { SSizeSelect, SCarouselProduct } from "@/components/structural";
import { UColorPicker, UButton } from "@/components/unit";
import {mapGetters} from "vuex";

export default {
    data() {
        return {
            selectedProduct: {
                size: 40,
                quantity: 1,
                color: '#194d33',
            }
        };
    },
    methods: {
        handleSelect(size) {
            this.selectedProduct.size = size;
        },
        addToBasket() {
            this.$store.dispatch('baskets/addProduct', {
                productId: this.product.id,
                ...this.selectedProduct,
            })
        },
        changeColor(color) {
            this.selectedProduct.color = color
        }
    },
    mounted() {
      this.$store.dispatch('products/getProduct', {
          id: this.$route.params.articleId
      })
    },
    computed: {
        ...mapGetters({
            product: 'products/product',
        })
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
    height: 723px;
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
