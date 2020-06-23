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
    // try {
    //     if (!id)
    //         throw "Id is not correctely defined"
    //
    //     const res = await axios.get(`http://127.0.0.1:8000/api/products?brand_id=${id}`)
    //     const {products, ...brand} = res.data.payload
    //
    //     commit('getProducts', products)
    //     // commit('getBrand', brand)
    // } catch (e) {
    //     console.error(e)
    // }
    commit('getRelatedBrandProduct', id)
}

export {
    getProducts,
    getProduct,
    getRandomProducts,
    getRelatedBrandProduct
}
