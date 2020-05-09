<template>
    <main>
        <h1>Nouveaux arrivage</h1>
        <SCarouselProduct id="carousel" :products="arrivage" />
    </main>
</template>

<script>
import { arrivage } from "@/fakedata/fake.data";
import { SCarouselProduct } from "@/components/structural";

export default {
    data() {
        return {
            arrivage
        };
    },
    mounted() {
        console.log(arrivage);
    },
    computed: {},
    components: {
        SCarouselProduct
    }
};
</script>

<style lang="scss" scoped>
@use "Home";
</style>
