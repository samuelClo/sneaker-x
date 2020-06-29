const getNews = (state, news) => {
    console.log(news)
    state.news = news
}

const getAllNews= (state, AllNews) => {
    state.allNews = AllNews
}

const deleteNews = (state, id) => {
    const index = state.allNews.findIndex(news => news.id === id)

    state.allNews.splice(index, 1);
}

export {
    getAllNews,
    getNews,
    deleteNews,
}
