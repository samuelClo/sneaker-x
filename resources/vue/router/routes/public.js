const Home = () => import(/* webpackChunkName: "Home" */ "@/pages/Home");
const About = () => import(/* webpackChunkName: "About" */ "@/pages/About");
const Catalog = () => import(/* webpackChunkName: "Catalog" */ "@/pages/Catalog");
const News = () => import(/* webpackChunkName: "News" */ "@/pages/News");
const Basket = () => import(/* webpackChunkName: "Basket" */ "@/pages/Basket");
const NotFound = () => import(/* webpackChunkName: "404" */ "@/pages/404");

export default [
    {
        path: "/",
        name: "home",
        component: Home
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
        path: "news",
        name: "news",
        component: News
    },
    {
        path: "basket",
        name: "basket",
        component: Basket
    },
    {
        path: "*",
        name: "404",
        component: NotFound
    }
];
