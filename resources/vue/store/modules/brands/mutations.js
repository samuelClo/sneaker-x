const getBrands = (state, brands) => {
    console.log(brands)
    state.brands = brands
}

const getBrand = (state, brand) => {
    state.brand = brand
}

export {
    getBrands,
    getBrand
}
