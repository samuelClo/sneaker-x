<template>
    <div>
        <SSearch v-if="isSearching"/>
        <div v-if="isSearching" id="overlay" @click="handleOverlayClick" />
        <router-view />
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import SSearch from './components/structural/SSearch/SSearch'

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

                if (!(dataBasket.length > 0 || this.products.data.length > 0))
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
    methods: {
        handleOverlayClick() {
            this.$store.dispatch('search/setIsSearching', {
                value: false,
            })
        }
    },
    components: {
        SSearch
    },
    computed: {
        ...mapGetters({
            basket: 'baskets/basket',
            products: 'products/products',
            basketTotalPrice: 'baskets/basketTotalPrice',
            isSearching: 'search/isSearching',
        }),
    }
}
</script>

<style lang="scss">
    @import'@/assets/scss/main.scss';
</style>
