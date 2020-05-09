<template>
    <div class="container">
        <header>
            <SNavBar />  
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
import { SNavBar, SCarouselProduct } from "@/components/structural";

export default {
    components: {
        SNavBar
    }
};
</script>
