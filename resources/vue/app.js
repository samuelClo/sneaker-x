import Vue from "vue";

import router from "@/router";
import App from "@/App";
import store from '@/store'

const app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});

export default app;
