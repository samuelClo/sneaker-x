<template>
    <div>

        <ul id="wrapper">
            <li id="brandName" @click="handleClick">Marque >
                <ul class="selectWrapper" v-bind:class="{ active: isVisible }">
                    <li class="item" @click="handleBrandClick(brand.id)" v-for="brand in brands">
                        <img :src="brand.image" alt="brand.name">
                        <span>{{brand.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                isVisible: false
            }
        },
        methods: {
            handleClick() {
                this.isVisible = !this.isVisible
            },
            handleBrandClick(brandId) {
                this.$emit("onBrandClick", brandId)
            }
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
