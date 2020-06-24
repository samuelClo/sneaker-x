import Vue from "vue";

import router from "@/router";
import AppVue from "@/App.vue";
import store from '@/store'

const app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(AppVue)
});

export default app;
