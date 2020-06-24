<template>
    <main>
        <div id="wrapperOrders">
            <header id="headerOrders">
                <span>Panier</span>
            </header>
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
            />
            {{products ? basketPrice() : ''}}
        </div>
    </main>

</template>

<script>
    import {mapGetters} from 'vuex'

    import {SOrderItem} from "@/components/structural";

    export default {
        data() {
            return {
                basketPrice: function () {
                    if (!(this.basket.length > 0 || this.products.length > 0))
                        return 0

                    return  this.basket.reduce((acc, order) => {
                        const articlePrice = this.products
                            .find(product => product.id === order.productId)
                            ?.price
                        const orderPrice = articlePrice * order.quantity

                        return acc + parseInt(orderPrice, 10)
                    }, 0)
                }
            }
        },
        mounted() {
            this.$store.dispatch('products/getProductsByIds', {
                productsIds: this.productIds
            })
        },
        methods: {
            handleQuantityChange: function (quantity, orderId) {
                this.$store.dispatch('baskets/changeQuantityProduct', {
                    quantity,
                    orderId
                })
            },
            handleSizeChange: function (size, orderId) {
                this.$store.dispatch('baskets/changeSizeProduct', {
                    size,
                    orderId
                })
            },
            getProductInfo: function (productId) {
                return this.products.find(product => product.id === productId)
            }
        },
        computed: {
            ...mapGetters({
                basket: 'baskets/basket',
                products: 'products/products',
            }),
            productIds: function () {
                const ProductIds = this.basket.map(order => order.productId)

                return [...new Set(ProductIds)]
            },
        },
        components: {
            SOrderItem
        }
    };
</script>

<style lang="scss">
    #wrapperHome #carousel-test #carousel {
        width: 800px;
    }
</style>
<style lang="scss" scoped>
    @import "Basket";
</style>
