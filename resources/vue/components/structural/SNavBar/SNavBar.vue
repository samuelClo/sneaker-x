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
                <ULink href="news">
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
                <ULink href="basket">
                    <!-- global style class -->
                    <img
                        src="@/assets/pictures/logos/logo-basket.svg"
                        alt="Access to the basket page"
                        class="useful_links_logos" 
                    />
                </ULink>
            </div>
        </div>
    </nav>
</template>

<script>
import { ULink, UBurgerMenu, USearch } from "@/components/unit";

export default {
    name: "SNavbar",
    components: {
        ULink,
        UBurgerMenu,
        USearch
    }
};
</script>

<style lang="scss" scoped>
@import "SNavBar";
</style>
