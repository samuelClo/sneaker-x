const getNews = (state, news) => {
    console.log(news)
    state.news = news
}

const getAllNews= (state, AllNews) => {
    state.allNews = AllNews
}

export {
    getAllNews,
    getNews,
}
