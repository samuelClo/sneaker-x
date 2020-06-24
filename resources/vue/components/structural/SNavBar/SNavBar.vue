<template>
    <nav>
        <ULink id="logo" href="home">
            <img
                src="@/assets/pictures/logos/logo-sneaker-x.png"
                alt="website logo"
                id="logo"
            />
        </ULink>
        <ul id="links">
            <li class="link">
                <ULink href="home">
                    Accueil
                </ULink>
            </li>
            <li class="link">
                <ULink href="catalog">
                    Catalogue
                </ULink>
            </li>
            <li class="link">
                <ULink href="allNews">
                    Actualité
                </ULink>
            </li>
        </ul>
        <div id="useful_links">
            <div class="usefil_links_wrapper">
                <UBurgerMenu />
            </div>
            <div class="usefil_links_wrapper">
                <USearch />
            </div>
            <div class="usefil_links_wrapper">
                <UBasketIcon :articleNumber="basket.length"/>
            </div>
        </div>
    </nav>
</template>

<script>
import { ULink, UBurgerMenu, USearch, UBasketIcon } from "@/components/unit";
import {mapGetters} from "vuex";

export default {
    name: "SNavbar",
    components: {
        ULink,
        UBurgerMenu,
        USearch,
        UBasketIcon
    },
    computed: {
        ...mapGetters({
            basket: 'baskets/basket',
        }),
    }
};
</script>

<style lang="scss" scoped>
@import "SNavBar";
</style>
