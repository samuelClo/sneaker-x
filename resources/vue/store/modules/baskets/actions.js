import axios from 'axios'

const addProduct = async ({commit}, payload) => {
    const {productId, quantity, size, color} = payload

    if (!(productId && quantity && size && color)) {
        console.error('missing some information to add a product in the basket')
        alert('missing some information to add a product in the basket')
        return
    }
    const orderWithId = {
        ...payload,
        id: productId + color + size
    }

    commit('addProduct', orderWithId)
}

const changeSizeProduct = ({commit}, payload) => {
    const {orderId, size} = payload

    if (!(size && orderId)) {
        console.error('missing some information to add a product in the basket')
        alert('missing some information to add a product in the basket')
        return
    }

    commit('changeSizeProduct', payload)
}

const changeQuantityProduct = ({commit}, payload) => {
    const {orderId, quantity} = payload

    if (!(orderId && quantity)) {
        console.error('missing some information to add a product in the basket')
        alert('missing some information to add a product in the basket')
        return
    }

    commit('changeQuantityProduct', payload)
}

export {
    addProduct,
    changeSizeProduct,
    changeQuantityProduct
}
