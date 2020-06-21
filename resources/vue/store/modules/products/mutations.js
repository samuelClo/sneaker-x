const getProducts = (state, products) => {
    state.products = products
}

const getProduct = (state, product) => {
    state.product = product
}

export {
    getProducts,
    getProduct,
}
