<template>
    <main>
        <h1>Tous les produits :</h1>
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
    import {allProduct} from "@/fakedata/fake.data";
    import {UProductCard} from '@/components/unit'

    export default {
        data() {
            return {
                allProduct
            }
        },
        components: {
            UProductCard,
        }
    }
</script>

<style lang="scss" scoped>
    @import "Catalog";
</style>
