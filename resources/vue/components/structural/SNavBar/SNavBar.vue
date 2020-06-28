<template>
    <nav>
        <ULink id="logo" href="home">
            <img
                src="@/assets/pictures/logos/logo-sneaker-x.png"
                alt="website logo"
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
            <li class="link">
                <ULink href="contact">
                    Contact
                </ULink>
            </li>
            <li class="link">
                <ULink href="admin">
                    Admin
                </ULink>
            </li>
        </ul>
        <div id="useful_links">
<!--            <div class="usefil_links_wrapper">-->
<!--                <UBurgerMenu />-->
<!--            </div>-->

            <div class="usefil_links_wrapper">
                <img
                    class="useful_links_logos"
                    src="@/assets/pictures/logos/logo-search-bar.svg"
                    alt="Open search bar"
                    @click="handleSearchClick"
                />
            </div>
            <div class="usefil_links_wrapper">
                <UBasketIcon :articleNumber="basket.length ? basket.length : 0"/>
            </div>
        </div>
    </nav>
</template>

<script>
import { ULink, UBurgerMenu, UBasketIcon } from "@/components/unit";
import SSearch from '../../structural/SSearch/SSearch'

import {mapGetters} from "vuex";


export default {
    name: "SNavbar",
    components: {
        ULink,
        UBurgerMenu,
        SSearch,
        UBasketIcon
    },
    methods: {
        handleSearchClick() {
            this.$store.dispatch('search/setIsSearching', {
                value: !this.isSearching,
            })
        }
    },
    computed: {
        ...mapGetters({
            basket: 'baskets/basket',
            isSearching: 'search/isSearching'
        }),
    },
    watch: {
        isSearching() {
            if (this.isSearching) {
                document.documentElement.style.overflow = 'hidden'
                return
            }

            document.documentElement.style.overflow = 'auto'

        }
    }
};
</script>

<style lang="scss" scoped>
@import "SNavBar";
</style>
