import axios from 'axios'

const getAllNews = async ({commit}) => {
    try {
        const res = await axios.get('/api/news')

        commit('getAllNews', res.data.payload)
    } catch (e) {
        console.error(e)
    }

}

const getNews = async ({commit}, {id}) => {
    try {
        const res = await axios.get(`/api/news/${id}`)

        console.log(res.data)

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

const deleteNews = async ({commit}, {id}) => {
    try {
        await axios.delete(`/api/news/${id}`)

        commit('deleteNews', id)
    } catch (e) {
        console.error(e)
    }
}

export {
    getNews,
    getAllNews,
    getQuantityNews,
    deleteNews
}
