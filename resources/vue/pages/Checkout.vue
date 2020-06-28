<template>
    <main>
        <div id="basket_review">
            <h1>Récapitulatif</h1>
            <div
                v-for="order in basket"
                class="order_review_wrapper"
                v-if="products.length > 0"
                :color="order.color"
                :quantity="order.quantity"
                :size="order.size"
            >
                <span class="order_review_product order_review_product_title">
                    {{getProductInfo(order.productId).name}}
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        color
                    </span>
                    <span class="order_review_product_value">
                        {{order.color}}
                    </span>
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        quantity
                    </span>
                    <span class="order_review_product_value">
                       {{order.quantity}}
                    </span>
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        size
                    </span>
                    <span class="order_review_product_value">
                        {{order.size}}
                    </span>
                </span>
                <span class="order_review_product">
                    <span class="order_review_product_property">
                        price
                    </span>
                    <span class="order_review_product_value">
                        {{getProductInfo(order.productId).price * order.quantity}}€
                    </span>
                </span>
            </div>
            <div id="total_price">
                TOTAL {{basketTotalPrice}}€
            </div>
        </div>
        <form @submit.prevent="handleSubmit" id="user_info">
            <h1>Vos informations</h1>
            <div class="form-group">
                <label for="name">Nom complet *</label>
                <input type="text" placeholder="John Doe" v-model="user.name" id="name" name="name" class="form-control"
                       :class="{ 'is-invalid': submitted && $v.user.name.$error }"/>
                <div v-if="submitted && !$v.user.name.required" class="invalid-feedback">name is required</div>
            </div>
            <div class="form-group">
                <label for="email">Mail *</label>
                <input type="email" placeholder="E-mail" v-model="user.email" id="email" name="email"
                       class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }"/>
                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                    <span v-if="!$v.user.email.required">Email is required</span>
                    <span v-if="!$v.user.email.email">Email is invalid</span>
                </div>
            </div>
            <div class="form-group">
                <label for="address">Adresse *</label>
                <input type="text" placeholder="12 rue des cailloux" v-model="user.address" id="address" name="address"
                       class="form-control" :class="{ 'is-invalid': submitted && $v.user.address.$error }"/>
                <div v-if="submitted && $v.user.address.$error" class="invalid-feedback">
                    <span v-if="!$v.user.address.required">Adresse is required</span>
                </div>
            </div>
            <div class="form-group">
                <label for="additionalAddress">Complément d'adresse</label>
                <input type="text" placeholder="Complément d'adresse" v-model="user.additionalAddress"
                       id="additionalAddress" name="additionalAddress" class="form-control">
            </div>
            <div class="form-group">
                <label for="city">Ville *</label>
                <input type="text" placeholder="12 rue des cailloux" v-model="user.city" id="city" name="city"
                       class="form-control" :class="{ 'is-invalid': submitted && $v.user.city.$error }"/>
                <div v-if="submitted && $v.user.city.$error" class="invalid-feedback">
                    <span v-if="!$v.user.city.required">city is required</span>
                </div>
            </div>
            <div class="form-group">
                <label for="postalCode">Code postal *</label>
                <input type="text" placeholder="75205" v-model="user.postalCode" id="postalCode" name="postalCode"
                       class="form-control" :class="{ 'is-invalid': submitted && $v.user.postalCode.$error }"/>
                <div v-if="submitted && $v.user.postalCode.$error" class="invalid-feedback">
                    <span v-if="!$v.user.postalCode.required">postalCode is required</span>
                    <span v-if="!$v.user.postalCode.minLength || !$v.user.postalCode.maxLength">Le code postal est non valide</span>
                </div>
            </div>
            <div class="btn_wrapper">
                <UButton size="large" content="Continuer"/>
            </div>
        </form>
        <div id="credit_card_wrapper" v-if="isValid">
            <VCreditCard @change="creditInfoChanged" />
            <div class="btn_wrapper">

                    <UButton size="large" content="Commander" @onClick="handleFinish"/>

            </div>
        </div>
    </main>
</template>

<script>
    import {mapGetters} from 'vuex'

    import {required, email, minLength, maxLength} from "vuelidate/lib/validators";
    import VCreditCard from 'v-credit-card';
    import 'v-credit-card/dist/VCreditCard.css';

    import {SOrderItem} from "@/components/structural";
    import {UButton, ULink} from "@/components/unit";

    export default {
        data() {
            return {
                user: {
                    name: "",
                    email: "",
                    address: "",
                    additionalAddress: "",
                    city: "",
                    postalCode: "",
                },
                submitted: false,
                isValid: false,
                cardInfo: {
                    name: '',
                    cardNumber: '',
                    expiration: '',
                    security: ''
                }
            }
        },
        mounted() {
            this.$store.dispatch('products/getProductsByIds', {
                productsIds: this.productIds
            })
        },
        validations: {
            user: {
                name: {required},
                email: {required, email},
                address: {required},
                city: {required},
                postalCode: {required, minLength: minLength(5), maxLength: maxLength(5)},
            }
        },
        methods: {
            getProductInfo: function (productId) {
                return this.products.find(product => product.id === productId)
            },
            handleSubmit: function (e) {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid){
                    this.isValid = false
                    return
                }

                this.isValid = true
            },
            creditInfoChanged(values) {
                for (const key in values) {
                    this.cardInfo[key] = values[key];
                }
            },
            handleFinish: function() {
                const cardNumber = this.cardInfo.cardNumber.replace(/ /g,'')

                const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
                const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
                const amexpRegEx = /^(?:3[47][0-9]{13})$/;
                const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
                let isValid = false;

                if (visaRegEx.test(cardNumber))
                    isValid = true;
                else if (mastercardRegEx.test(cardNumber))
                    isValid = true;
                else if (amexpRegEx.test(cardNumber))
                    isValid = true;
                else if (discovRegEx.test(cardNumber))
                    isValid = true;

                this.$v.$touch();

                if (this.cardInfo.name.trim().length !== 0 &&
                    this.cardInfo.expiration.trim().length === 5 &&
                    this.cardInfo.security.trim().length !== 0 &&
                    isValid && !this.$v.$invalid
                ){
                    this.$store.dispatch('baskets/sendBasket', {
                        user: this.user,
                        // basket: {
                        //     basketProduct: this.basket,
                        //     basketTotalPrice: this.basketTotalPrice
                        // }
                    })
                    this.$store.dispatch('users/setUser', {
                        user: this.user,
                    })
                    this.$router.push('confirm')
                } else {

                    alert('Erreur dans la saisie des informations bancaire')
                }
            }
        },
        computed: {
            ...mapGetters({
                basket: 'baskets/basket',
                products: 'products/products',
                basketTotalPrice: 'baskets/basketTotalPrice',
            }),
            productIds: function () {
                const ProductIds = this.basket.map(order => order.productId)

                return [...new Set(ProductIds)]
            },
        },
        components: {
            SOrderItem,
            UButton,
            ULink,
            VCreditCard
        }
    };
</script>
<style lang="scss">
    #credit_card_wrapper {
        width: 320px;
        border: 1px solid $color_light_grey;
        padding: 10px;
        border-radius: 10px;
        height: fit-content;

        .vue-credit-card .credit-card-image {
            height: 146px;
            width: 260px;
        }

        .vue-credit-card .card-form-and-image .credit-card-form {
            padding: unset;
        }

        .vue-credit-card .card-form-and-image .credit-card-form .field label {
            margin-top: 8px;
            display: block;
            padding-bottom: unset;
            font-size: unset;
            @include font_RE;
        }

        .vue-credit-card .card-form-and-image .credit-card-form .field input {
            box-sizing: border-box;
            padding: 10px;
            width: 100%;
            border-radius: 3px;
            border: 1px solid $color_light_grey;
            @include font_RE;

            margin-top: unset;
        }

        .vue-credit-card .card-form-and-image .credit-card-form .field {
            margin: unset;
        }
    }
</style>
<style lang="scss" scoped>
    @import "Checkout";
</style>
