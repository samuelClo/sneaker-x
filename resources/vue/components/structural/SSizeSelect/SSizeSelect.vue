<template>
    <div id="wrapper_select">
        <USizeSelect
            v-for="size in sizes"
            :key="size"
            :size="size"
            @onClick="handleClick"
            :active="size === activeItem"
        />
    </div>
</template>

<script>
    import {USizeSelect} from "@/components/unit";

    export default {
        data: function () {
            return {
                activeItem: this.default || null,
            };
        },
        methods: {
            handleClick(size) {
                this.activeItem = size;
                this.$emit('onClick', size)
            },
        },
        props: {
            sizes: {
                type: Array,
                required: false,
                default: function () {
                    return [39, 40, 41, 42, 44, 44.5]
                }
            },
            default: {
                type: Number,
                required: false
            }
        },
        components: {
            USizeSelect
        }
    };
</script>

<style lang="scss" scoped>
    @import "SSizeSelect";
</style>
