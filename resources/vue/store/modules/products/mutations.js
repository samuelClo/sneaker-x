const getProducts = (state, products) => {
    state.products = products
}

const getProduct = (state, product) => {
    state.product = product
}

const getRelatedBrandProduct = (state, brandId) => {
    const products = state.products

    state.filteredProducts = products
        .filter(product => product.brand_id === brandId)
}

export {
    getProducts,
    getProduct,
    getRelatedBrandProduct
}
