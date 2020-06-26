const addProduct = (state, payload) => {
    let isSame = false
    const data = state.basket.length > 0 ?
        state.basket.map(order => {
            let {quantity: payloadQuantity, ...content} = payload
            let {quantity, ...stateContent} = order

            if (JSON.stringify(content) === JSON.stringify(stateContent)) {
                isSame = true
                quantity += payloadQuantity
            }

            return {quantity, ...stateContent}
        }) : []

    if (isSame) {
        localStorage.setItem('basket', JSON.stringify(data));
        state.basket = data
    } else {
        const result = [...data, {...payload}]

        state.basket = result
        localStorage.setItem('basket', JSON.stringify(result))
    }
}

const changeOrderSize = (state, payload) => {
    const {size, orderId} = payload

    const data = state.basket.map(orderState => {
        if (orderState.id !== orderId)
            return orderState

        return {
            ...orderState,
            size
        }
    })

    state.basket = data
    localStorage.setItem('basket', JSON.stringify(data));
}

const changeOrderQuantity = (state, payload) => {
    const {quantity, orderId} = payload

    const data = state.basket.map(orderState => {
        if (orderState.id !== orderId)
            return orderState

        return {
            ...orderState,
            quantity
        }
    })

    state.basket = data
    localStorage.setItem('basket', JSON.stringify(data));
}

const deleteProduct = (state, payload) => {
    const {orderId} = payload
    const index = state.basket.findIndex(order => order.id === orderId)

    state.basket.splice(index, 1);

    localStorage.removeItem('basket');
    localStorage.setItem('basket', JSON.stringify(state.basket));
}

const setBasketTotalPrice = (state, payload) => {
    state.basketTotalPrice = payload.basketTotalPrice
}

export {
    addProduct,
    changeOrderSize,
    changeOrderQuantity,
    deleteProduct,
    setBasketTotalPrice,
}
