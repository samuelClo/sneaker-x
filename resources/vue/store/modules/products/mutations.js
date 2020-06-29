const getProducts = (state, products) => {
    console.log(products)
    state.products = products
}

const getProduct = (state, product) => {
    state.product = product
}

const getRelatedBrandProduct = (state, brandId) => {
    const products = [...state.products]

    state.filteredProducts = products
        .filter(product => product.brand_id === brandId)
}

const getFilteredProducts = (state, filteredProducts) => {
    state.filteredProducts = filteredProducts
}

const trashFilteredProducts = (state) => {
    state.filteredProducts = []
}

const deleteProduct = (state, id) => {
    const index = state.products.findIndex(product => product.id === id)

    state.products.splice(index, 1);
}

export {
    getProducts,
    getProduct,
    getRelatedBrandProduct,
    getFilteredProducts,
    trashFilteredProducts,
    deleteProduct
}
