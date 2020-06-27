import axios from 'axios'

const getProducts = async ({commit}) => {
    try {
        const res = await axios.get('/api/products')

        commit('getProducts', res.data.payload)
    } catch (e) {
        console.error(e)
    }
}

const getProduct = async ({commit}, {id}) => {
    try {
        if (!id)
            throw "Id is not correctely defined"

        const res = await axios.get(`/api/products/${id}`)

        commit('getProduct', res.data.payload)
    } catch (e) {
        console.error(e)
    }
}

const getRandomProducts = async ({commit}, {value}) => {
    try {
        if (!value)
            throw "Value is not correctely defined"

        const res = await axios.get(`api/products?sort=random&max=${value}`)

        commit('getProducts', res.data.payload)
    } catch (e) {
        console.error(e)
    }
}

const getRelatedBrandProduct = async ({commit}, {id}) => {
    commit('getRelatedBrandProduct', id)
}

const getProductsByIds = async ({commit}, {productsIds}) => {
    try {
        if (!productsIds || productsIds.length === 0)
            throw "need a array of product id"

        const res = await axios.post(`/api/products/getProductsByIds`, {productsIds})

        commit('getProducts', res.data.payload)
    } catch (e) {
        console.error(e)
    }
}

export {
    getProducts,
    getProduct,
    getRandomProducts,
    getRelatedBrandProduct,
    getProductsByIds
}
