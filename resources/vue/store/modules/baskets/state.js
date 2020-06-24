const storage = JSON.parse(localStorage.getItem('basket'))

export default {
    basket: storage || [],
}
