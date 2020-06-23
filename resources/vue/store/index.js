import axios from 'axios'

// axios.defaults.headers.common['Content-Type'] = 'application/json'

import Vue from 'vue'
import Vuex from 'vuex'

import products from './modules/products'
import news from './modules/news'
import brands from './modules/brands'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products,
        news,
        brands
    }
})
