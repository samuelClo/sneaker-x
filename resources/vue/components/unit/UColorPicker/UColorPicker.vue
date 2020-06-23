<template>
    <div id="wrapper">
        <div
            ref="boutonColor"
            @click="handleClick"
            id="choose_color"
            v-bind:style="{backgroundColor: this.colors.hex}"
        />
        <span ref="colorPicker" id="select_color">
            <chrome v-if="isSelected" v-model="colors"/>
        </span>
    </div>
</template>

<script>
    import {Chrome} from 'vue-color'

    let listener = null

    export default {
        data: function () {
            return {
                isSelected: false,
                colors: {
                    hex: '#194d33',
                    hsl: {
                        h: 150,
                        s: 0.5,
                        l: 0.2,
                        a: 1
                    },
                    hsv: {
                        h: 150,
                        s: 0.66,
                        v: 0.30,
                        a: 1
                    },
                    rgba: {
                        r: 25,
                        g: 77,
                        b: 51,
                        a: 1
                    },
                    a: 1
                }
            }
        },
        mounted() {
            listener = (e) => {
                const colorPicker = this.$refs.colorPicker
                const boutonColor = this.$refs.boutonColor
                const targetClick = e.target

                if (colorPicker.contains(targetClick) || boutonColor.contains(targetClick))
                    return
                this.isSelected = false
            }
            document.addEventListener('click', listener)
        },
        beforeDestroy() {
            document.removeEventListener('click', listener)
        },
        methods: {
            handleClick() {
                this.isSelected = !this.isSelected
            }
        },
        watch: {
            colors: function (value) {
                this.$emit("onColorChange", value.hex)
            }
        },
        components: {
            Chrome,
        }
    }
</script>

<style lang="scss" scoped>
    @import "UColorPicker";
</style>
