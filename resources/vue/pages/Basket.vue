<template>
    <main>
        <div id="wrapperOrders">
            <header id="headerOrders">
                <span>Panier</span>
            </header>
            <div id="wrapper_small_screen">
                <SOrderItem
                    v-for="order in basket"
                    v-if="products.length > 0"
                    :color="order.color"
                    :quantity="order.quantity"
                    :size="order.size"
                    :product="getProductInfo(order.productId)"
                    :key="order.id"
                    @onQuantityChange="handleQuantityChange($event, order.id)"
                    @onSizeChange="handleSizeChange($event, order.id)"
                    @onDelete="handleDelete(order.id)"
                />
            </div>

        </div>
        <div id="recapBasket" v-if="">
            <h1>
                Récapitulatif
            </h1>
            <div id="recapTotal">
                <span>
                    Total
                </span>
                <span>
                    {{basketTotalPrice ? basketTotalPrice : 0}}€
                </span>
            </div>
            <hr id="separator">
            <ULink href="checkout">
                <UButton size="large" content="Paiement" />
            </ULink>
        </div>
    </main>

</template>

<script>
    import {mapGetters} from 'vuex'

    import {SOrderItem} from "@/components/structural";
    import {UButton, ULink} from "@/components/unit";

    export default {
        mounted() {
            this.$store.dispatch('products/getProductsByIds', {
                productsIds: this.productIds
            })
        },
        methods: {
            handleQuantityChange: function (quantity, orderId) {
                this.$store.dispatch('baskets/changeOrderQuantity', {
                    quantity,
                    orderId
                })
            },
            handleSizeChange: function (size, orderId) {
                this.$store.dispatch('baskets/changeOrderSize', {
                    size,
                    orderId
                })
            },
            getProductInfo: function (productId) {
                return this.products?.find(product => product.id === productId)
            },
            handleDelete: function (orderId) {
                this.$store.dispatch('baskets/deleteProduct', {
                    orderId
                })
            }
        },
        computed: {
            ...mapGetters({
                basket: 'baskets/basket',
                products: 'products/products',
                basketTotalPrice: 'baskets/basketTotalPrice',
            }),
            productIds: function () {
                const ProductIds = this.basket.map(order => order.productId)

                return [...new Set(ProductIds)]
            },
        },
        components: {
            SOrderItem,
            UButton,
            ULink
        }
    };
</script>

<style lang="scss" scoped>
    @import "Basket";
</style>
