<template>
    <div>
        <header>
            <SNavBar />
        </header>
        <main id="container">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import { SNavBar } from "@/components/structural";

export default {
    components: {
        SNavBar
    },
};
</script>

<style lang="scss">
#container {
    padding: 15px;
}
</style>
