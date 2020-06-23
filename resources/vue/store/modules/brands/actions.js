import axios from 'axios'

const getBrands = async ({commit}) => {
    try {
        const res = await axios.get('/api/brands')

        commit('getBrands', res.data.payload)
    } catch (e) {
        console.error(e)
    }

}

export {
    getBrands
}
