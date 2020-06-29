const getBrands = (state, brands) => {
    console.log(brands)
    state.brands = brands
}

const getBrand = (state, brand) => {
    state.brand = brand
}

const deleteBrand = (state, id) => {
    const index = state.brands.findIndex(brand => brand.id === id)

    state.brands.splice(index, 1);
}

export {
    getBrands,
    getBrand,
    deleteBrand
}
