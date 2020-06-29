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

const getProductSearch = async ({commit}, {text, page = 1}) => {
    console.log(page, text)
    if (!text) {
        commit('trashFilteredProducts')
        return
    }
    try {
        const res = await axios.get(`/api/products?page=${page}&search=${text}`)

        commit('getFilteredProducts', res.data.payload)

    } catch (e) {
        console.error(e)
    }
}

const deleteProduct = async ({commit}, {id}) => {
    try {
        await axios.delete(`/api/products/${id}`)

        commit('deleteProduct', id)
    } catch (e) {
        console.error(e)
    }
}

export {
    getProducts,
    getProduct,
    getRandomProducts,
    getRelatedBrandProduct,
    getProductsByIds,
    getProductSearch,
    deleteProduct
}
