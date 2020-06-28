<template>
    <main>
        <h1>TOUS LES PRODUITS</h1>
        <SFilterProduct :brands="brands" @onBrandClick="handleBrandClick" @onAllProductClick="handleAllProductClick"/>
<!--        <div class="grid" id="productGrid">-->
<!--            <UProductCard-->
<!--                v-for="product in data"-->
<!--                :key="product.id"-->
<!--                :name="product.name"-->
<!--                :picture="product.image"-->
<!--                :price="product.price"-->
<!--                :id="product.id"-->
<!--            />-->
<!--        </div>-->
        <SCardList :withPaginate="false" :products="data"/>
    </main>

</template>

<script>
    import {SFilterProduct, SCardList} from '@/components/structural'
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                isFiltered: false
            }
        },
        methods: {
            handleBrandClick(brandId) {
                this.$store.dispatch('products/getRelatedBrandProduct', {
                    id: brandId,
                })
                this.isFiltered = true
            },
            handleAllProductClick() {
                this.isFiltered = false
            }
        },
        components: {
            SFilterProduct,
            SCardList
        },
        mounted() {
            this.$store.dispatch('products/getProducts')
            this.$store.dispatch('brands/getBrands')
        },
        computed: {
            ...mapGetters({
                allProduct: 'products/products',
                brands: 'brands/brands',
                filteredProducts: 'products/filteredProducts',
            }),
            data: function () {
                return this.isFiltered ? this.filteredProducts : this.allProduct
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Catalog";
</style>
