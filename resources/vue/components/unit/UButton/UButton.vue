<template>
    <button @click="handleClick" id="wrapper_btn" :class="this.style">
        {{ content }}
    </button>
</template>

<script>
export default {
    data() {
        return {
            style: {
                is_small: this.size === "small",
                is_large: this.size === "large"
            }
        };
    },
    methods: {
        handleClick: function() {
            this.$emit("onClick");
        }
    },
    props: {
        size: {
            required: false,
            default: "small",
            validator: function(value) {
                return ["large", "small"].indexOf(value) !== -1;
            }
        },
        content: {
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "UButton";
</style>
