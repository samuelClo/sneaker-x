<template>
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
</template>

<script>
    export default {
        data () {
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
        methods: {},
        props: {
            data: {
                required: true,
            },
            model: {
                required: true,
            },
        },
        // validations: {
        //     user: {
        //         name: {required},
        //         email: {required, email},
        //         address: {required},
        //         city: {required},
        //         postalCode: {required, minLength: minLength(5), maxLength: maxLength(5)},
        //     }
        // },
    }
</script>

<style  lang="scss" scoped>
    @import "SModalEdition";
</style>
