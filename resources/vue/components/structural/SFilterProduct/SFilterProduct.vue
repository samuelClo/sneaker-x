<template>
    <div>
        <ul id="wrapper">
            <li ref="wrapper" id="brandName" @click="handleClick">
                Marque >
                <ul class="selectWrapper" v-bind:class="{ active: isVisible }">
                    <div id="all">
                        <span @click="handleAllProductClick">Tous les produits</span>
                        Marques :
                    </div>
                    <li class="item" ref="item" @click="handleBrandClick(brand.id)" v-for="brand in brands">
                        <img :src="brand.image" alt="brand.name">
                        <span>{{brand.name}}</span>
                        <span> __{{brand.products_count}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

</template>

<script>
    let listener = null

    export default {
        data() {
            return {
                isVisible: false
            }
        },
        methods: {
            handleClick(e) {
                this.isVisible = true
            },
            handleBrandClick(brandId) {
                console.log('gegeg')
                this.isVisible = false
                this.$emit("onBrandClick", brandId)

            },
            handleAllProductClick(e) {
                this.$emit('onAllProductClick')
            }
        },
        mounted() {
            listener = (e) => {
                const wrapper = this.$refs.wrapper
                const targetClick = e.target

                if (wrapper.contains(targetClick))
                    return
                this.isVisible = false
            }
            document.addEventListener('click', listener)
        },
        beforeDestroy() {
            document.removeEventListener('click', listener)
        },
        props: {
            brands: {
                required: true,
                type: Array,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "SFilterProduct";
</style>
