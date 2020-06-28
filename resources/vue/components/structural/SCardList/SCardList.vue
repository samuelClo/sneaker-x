<template>
    <div id="wrapperCards">
        <div class="grid" :style="customStyle">
            <UProductCard
                v-for="product in getArticles"
                :key="product.id"
                :name="product.name"
                :picture="product.image"
                :price="product.price"
                :id="product.id"
            />
        </div>
        <div v-if="withPaginate && products.current_page">
            <nav aria-label="Page navigation">
                <ul id="navPaginate">
                    <li v-for="page in products.last_page"  :class="{active: page === products.current_page }">
                        <a @click="toPage(page)" class="toPageItem">
                            {{ page }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

</template>

<script>
    import { UProductCard } from '@/components/unit'

    export default {
        data: function () {
            return {

            }
        },
        methods: {
            toPage(page) {
                this.$emit('changePage', page)
            }
        },
        props: {
            withPaginate: {
                required: false,
                default: false,
                type: Boolean
            },
            products: {
                required: true,
            },
            customStyle: {
                required: false,
                type: Object,
            },
        },
        components: {
            UProductCard,
        },
        computed: {
            getArticles() {
                return this.withPaginate ? this.products.data : this.products
            }
        }
    }
</script>

<style  lang="scss" scoped>
    @import "SCardList";
</style>


