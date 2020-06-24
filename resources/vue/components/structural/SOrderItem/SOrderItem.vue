<template>
    <div id="wrapperProduct">
        <img id="pictureProduct" :src="product.image" :alt="product.title">
        <div id="wrapperAssets">
            <h3>{{product.name}}</h3>
            <span>Color: {{color}}</span>
            <span>Size :</span>
            <SSizeSelect  @onClick="handleSizeClick" :default="size"/>
            <span>Quantity :</span>
            <SSizeSelect
                :default="quantity"
                :sizes="test"
                @onClick="handleQuantityClick"
            />
            <span id="price">{{getPrice}}€</span>
        </div>
    </div>
</template>

<script>
    import {SSizeSelect} from '@/components/structural'

    export default {
        data: function () {
            return {
                test: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        },
        methods: {
            handleQuantityClick: function (quantity) {
                this.$emit('onQuantityChange', quantity)
            },
            handleSizeClick: function (size) {
                this.$emit('onSizeChange', size)
            }
        },
        props: {
            color: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            size: {
                type: Number,
                required: true
            },
            product: {
                type: Object,
                required: true
            },
        },
        components: {
            SSizeSelect
        },
        computed: {
            getPrice: function () {
                return this.quantity * this.product.price
            }
        }
    }
</script>

<style  lang="scss" scoped>
    @import "SOrderItem";
</style>
