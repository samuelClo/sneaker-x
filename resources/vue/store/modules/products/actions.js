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
        const res = await axios.get(`/api/products/${id}`)

        commit('getProduct', res.data.payload)
    } catch (e) {
        console.error(e)
    }
}

const getRandomProducts = async ({commit}, {value}) => {
    try {
        const res = await axios.get(`api/products?sort=random&max=${value}`)

        commit('getProducts', res.data.payload)
    } catch (e) {
        console.error(e)
    }
}

export {
    getProducts,
    getProduct,
    getRandomProducts
}
