const getNews = (state, news) => {
    state.news = news
}

const getAllNews= (state, AllNews) => {
    state.allNews = AllNews
}

export {
    getAllNews,
    getNews,
}
