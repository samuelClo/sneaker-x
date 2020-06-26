const Home = () => import(/* webpackChunkName: "Home" */ "@/pages/Home");
const About = () => import(/* webpackChunkName: "About" */ "@/pages/About");
const Catalog = () => import(/* webpackChunkName: "Catalog" */ "@/pages/Catalog");
const AllNews = () => import(/* webpackChunkName: "AllNews" */ "@/pages/AllNews");
const Article = () => import(/* webpackChunkName: "Article" */ "@/pages/Article");
const NotFound = () => import(/* webpackChunkName: "404" */ "@/pages/404");
const News = () => import(/* webpackChunkName: "News" */ "@/pages/News");
const Basket = () => import(/* webpackChunkName: "Basket" */ "@/pages/Basket");
const Checkout = () => import(/* webpackChunkName: "Checkout" */ "@/pages/Checkout");


export default [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/article/:articleId",
        name: "article",
        component: Article,
    },
    {
        path: "about",
        name: "about",
        component: About
    },
    {
        path: "catalog",
        name: "catalog",
        component: Catalog
    },
    {
        path: "allNews",
        name: "allNews",
        component: AllNews
    },
    {
        path: "/news/:newsId",
        name: "news",
        component: News,
    },
    {
        path: "/basket",
        name: "basket",
        component: Basket,
    },
    {
        path: "/checkout",
        name: "checkout",
        component: Checkout,
    },
    {
        path: "*",
        name: "404",
        component: NotFound
    }
];
