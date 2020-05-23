<template>
    <span @click="handleClick" id="wrapper" :class="{ is_active: active }">
        {{ size }}
    </span>
</template>

<script>
export default {
    data: function() {
        return {};
    },
    methods: {
        handleClick() {
            this.$emit("onClick", this.size);
        }
    },
    props: {
        size: {
            type: Number,
            required: true
        },
        active: {
            type: Boolean,
            required: false,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
@import "USizeSelect";
</style>
