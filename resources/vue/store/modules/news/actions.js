import axios from 'axios'

const getAllNews = async ({commit}) => {
    try {
        const res = await axios.get('/api/news')

        commit('getAllNews', res.data.payload)
    } catch (e) {
        console.error(e)
    }

}

const getNews = async ({commit}, id) => {
    try {
        const res = await axios.get(`/api/news/${id}`)

        commit('getNews', res.data.payload)
    } catch (e) {
        console.error(e)
    }
}

const getQuantityNews = async ({commit}, {quantity}) => {
    try {
        const res = await axios.get(`api/news?quantity=${quantity}`)

        commit('getAllNews', res.data.payload)
    } catch (e) {
        console.error(e)
    }
}

export {
    getNews,
    getAllNews,
    getQuantityNews,
}
