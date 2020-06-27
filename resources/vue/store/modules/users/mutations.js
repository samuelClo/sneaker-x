const getUser = (state, {user}) => {
    state.user = user
    localStorage.setItem('user', JSON.stringify(state.user));
}

export {
    getUser
}
