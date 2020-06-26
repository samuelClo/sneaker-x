<template>
    <router-view />
</template>

<script>
import {mapGetters} from "vuex"

export default {
    name: "App",
    created() {
        this.$store.subscribe((mutation, state) => {
            const { type } = mutation

            if (type === 'products/getProducts' ||
                type === 'baskets/addProduct' ||
                type === 'baskets/deleteProduct' ||
                type === 'baskets/changeOrderQuantity'
            ) {
                const dataBasket = [...state.baskets.basket]

                if (!(dataBasket.length > 0 || this.products.length > 0))
                    return 0

                const total = dataBasket.reduce((acc, order) => {
                    const articlePrice = this.products
                        .find(product => product.id === order.productId)
                        ?.price
                    const orderPrice = articlePrice * order.quantity

                    return acc + parseInt(orderPrice, 10)
                }, 0)

                this.$store.dispatch('baskets/setBasketTotalPrice', {
                    basketTotalPrice: total
                })

                localStorage.setItem('totalPrice', JSON.stringify(total))
            }
        })
    },
    computed: {
        ...mapGetters({
            basket: 'baskets/basket',
            products: 'products/products',
            basketTotalPrice: 'baskets/basketTotalPrice',
        }),
    }
}
</script>

<style lang="scss">
    @import'@/assets/scss/main.scss';
</style>
