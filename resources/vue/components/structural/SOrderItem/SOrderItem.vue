<template>
    <div id="wrapperProduct">
        <img id="pictureProduct" :src="product.image" :alt="product.title">
        <div id="wrapperAssets">
            <h3>{{product.name}}</h3>
            <span>Color: {{color}}</span>
            <span>Size :</span>
            <SSizeSelect @onClick="handleSizeClick" :default="size"/>
            <span>Quantity :</span>
            <SSizeSelect
                :default="quantity"
                :sizes="test"
                :price="getPrice"
                @onClick="handleQuantityClick"
            />
            <span id="price">{{getPrice}}€</span>
        </div>
        <span id="delete" @click="handleDeleteClick">
                <svg viewBox="0 0 365.71733 365" xmlns="http://www.w3.org/2000/svg"><g fill="#f44336"><path
                    d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0"/><path
                    d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0"/></g></svg>
        </span>
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
            },
            handleDeleteClick: function () {
                this.$emit('onDelete')
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

<style lang="scss" scoped>
    @import "SOrderItem";
</style>
