<template>
    <main>
        <h1>TOUS LES PRODUITS</h1>
        <SFilterProduct :brands="brands" @onBrandClick="handleBrandClick"/>
        <div class="grid" id="productGrid">
            <UProductCard
                v-for="product in allProduct"
                :key="product.id"
                :name="product.name"
                :picture="product.image"
                :price="product.price"
                :id="product.id"
            />
        </div>
    </main>

</template>

<script>
    import {allProduct, brands} from "@/fakedata/fake.data";
    import {UProductCard} from '@/components/unit'
    import {SFilterProduct} from '@/components/structural'

    export default {
        data() {
            return {
                allProduct,
                brands,
            }
        },
        methods: {
            handleBrandClick(brandId) {
                console.log(brandId)
            },
        },
        components: {
            UProductCard,
            SFilterProduct
        }
    }
</script>

<style lang="scss" scoped>
    @import "Catalog";
</style>
