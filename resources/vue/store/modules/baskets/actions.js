import axios from "axios"

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

const changeOrderSize = ({commit}, payload) => {
    const {orderId, size} = payload

    if (!(size && orderId)) {
        console.error('missing some information to add a product in the basket')
        alert('missing some information to add a product in the basket')
        return
    }

    commit('changeOrderSize', payload)
}

const changeOrderQuantity = ({commit}, payload) => {
    const {orderId, quantity} = payload

    if (!(orderId && quantity)) {
        console.error('missing some information to add a product in the basket')
        alert('missing some information to add a product in the basket')
        return
    }

    commit('changeOrderQuantity', payload)
}

const deleteProduct = ({commit}, payload) => {
    commit('deleteProduct', payload)
}

const setBasketTotalPrice = ({commit}, payload) => {
    commit('setBasketTotalPrice', payload)
}

const sendBasket = async ({commit}, payload) => {
    const {user, basket} = payload

    try {
        if (!user)
            throw "Id is not correctely defined"

        const res = await axios.put(`/api/basket`, {
            user,
            // basket
        })

        commit('getProduct', res.data.payload)
    } catch (e) {
        console.error(e)
    }
}

export {
    addProduct,
    changeOrderSize,
    changeOrderQuantity,
    deleteProduct,
    setBasketTotalPrice,
    sendBasket
}
