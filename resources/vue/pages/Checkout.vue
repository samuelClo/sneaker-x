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
                <input type="text" placeholder="John Doe" v-model="user.name" id="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && $v.user.name.$error }" />
                <div v-if="submitted && !$v.user.name.required" class="invalid-feedback">name is required</div>
            </div>
            <div class="form-group">
                <label for="email">Mail *</label>
                <input type="email" placeholder="E-mail" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                    <span v-if="!$v.user.email.required">Email is required</span>
                    <span v-if="!$v.user.email.email">Email is invalid</span>
                </div>
            </div>
            <div class="form-group">
                <label for="address">Adresse *</label>
                <input type="text" placeholder="12 rue des cailloux" v-model="user.address" id="address" name="address" class="form-control" :class="{ 'is-invalid': submitted && $v.user.address.$error }" />
                <div v-if="submitted && $v.user.address.$error" class="invalid-feedback">
                    <span v-if="!$v.user.address.required">Adresse is required</span>
<!--                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>-->
                </div>
            </div>
<!--            <div class="form-group">-->
<!--                <label for="confirmPassword">Confirm Password</label>-->
<!--                <input type="password" v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" class="form-control" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />-->
<!--                <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">-->
<!--                    <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>-->
<!--                    <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>-->
<!--                </div>-->
<!--            </div>-->
            <div class="form-group">
                <button class="btn btn-primary">Register</button>
            </div>
        </form>

    </main>
</template>

<script>
    import {mapGetters} from 'vuex'

    import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

    import {SOrderItem} from "@/components/structural";
    import {UButton, ULink} from "@/components/unit";

    export default {
        data() {
            return {
                user: {
                    name: "",
                    address: "",
                },
                submitted: false
            }
        },
        mounted() {
            this.$store.dispatch('products/getProductsByIds', {
                productsIds: this.productIds
            })
        },
        validations: {
            user: {
                firstName: { required },
                lastName: { required },
                email: { required, email },
                password: { required, minLength: minLength(6) },
                confirmPassword: { required, sameAsPassword: sameAs('password') }
            }
        },
        methods: {
            getProductInfo: function (productId) {
                return this.products.find(product => product.id === productId)
            },
            getPrice: function (quantity, product) {
                return this.quantity * this.product.price
            },
            handleSubmit: function(e) {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
            },
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
            ULink
        }
    };
</script>

<style lang="scss" scoped>
    @import "Checkout";
</style>
