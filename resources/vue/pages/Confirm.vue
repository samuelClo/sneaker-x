<template>
    <div id="wrapper_confirm">
        <h1>Votre commande</h1>
        <div class="basket_review">
            <div
                v-for="order in basket"
                class="order_review_wrapper"
                v-if="products.length > 0"
                :color="order.color"
                :quantity="order.quantity"
                :size="order.size"
            >
                <span class="order_review_product order_review_product_title">
                    {{getProductInfo(order.productId).name}}
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        color
                    </span>
                    <span class="order_review_product_value">
                        {{order.color}}
                    </span>
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        quantity
                    </span>
                    <span class="order_review_product_value">
                       {{order.quantity}}
                    </span>
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        size
                    </span>
                    <span class="order_review_product_value">
                        {{order.size}}
                    </span>
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        price
                    </span>
                    <span class="order_review_product_value">
                        {{getProductInfo(order.productId).price * order.quantity}}€
                    </span>
                </span>
            </div>
            <div class="total_price">
                TOTAL {{basketTotalPrice}}€
            </div>
        </div>
        <h1>Vos infos</h1>
        <div class="basket_review">
            <div class="order_review_wrapper">
                <span class="order_review_product order_review_product_title">
                    {{user.name}}
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        adresse
                    </span>
                    <span class="order_review_product_value">
                        {{user.address}}
                    </span>
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        complément d'adresse
                    </span>
                    <span class="order_review_product_value">
                       {{user.additionalAddress}}
                    </span>
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        ville
                    </span>
                    <span class="order_review_product_value">
                        {{user.city}}
                    </span>
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        code postal
                    </span>
                    <span class="order_review_product_value">
                        {{user.postalCode}}
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    import {} from "@/components/structural";
    import {} from "@/components/unit";

    export default {
        mounted() {
            this.$store.dispatch('products/getProductsByIds', {
                productsIds: this.productIds
            })
        },
        methods: {
            getProductInfo: function (productId) {
                return this.products.find(product => product.id === productId)
            },
        },
        computed: {
            ...mapGetters({
                basket: 'baskets/basket',
                products: 'products/products',
                basketTotalPrice: 'baskets/basketTotalPrice',
                user: 'users/user'
            }),
            productIds: function () {
                const ProductIds = this.basket.map(order => order.productId)

                return [...new Set(ProductIds)]
            },
        },
        components: {}
    };
</script>
<style lang="scss">
    #credit_card_wrapper {
        width: 320px;
        border: 1px solid $color_light_grey;
        padding: 10px;
        border-radius: 10px;
        height: fit-content;

        .vue-credit-card .credit-card-image {
            height: 146px;
            width: 260px;
        }

        .vue-credit-card .card-form-and-image .credit-card-form {
            padding: unset;
        }

        .vue-credit-card .card-form-and-image .credit-card-form .field label {
            margin-top: 8px;
            display: block;
            padding-bottom: unset;
            font-size: unset;
            @include font_RE;
        }

        .vue-credit-card .card-form-and-image .credit-card-form .field input {
            box-sizing: border-box;
            padding: 10px;
            width: 100%;
            border-radius: 3px;
            border: 1px solid $color_light_grey;
            @include font_RE;

            margin-top: unset;
        }

        .vue-credit-card .card-form-and-image .credit-card-form .field {
            margin: unset;
        }
    }
</style>
<style lang="scss" scoped>
    @import "Confirm";
</style>
