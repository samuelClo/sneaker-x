const basket = JSON.parse(localStorage.getItem('basket'))
const totalPrice = JSON.parse(localStorage.getItem('totalPrice'))

export default {
    basket: basket || [],
    basketTotalPrice: totalPrice ||  0,
}
