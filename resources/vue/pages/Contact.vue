<template>
    <div>
        <div id="wrapperContact">
            <div id="contactInfo">
                <h1>Contact</h1>
                <span>19 rue Yves Toudic 75010 Paris</span>
                <span>01 42 41 97 76</span>
                <span>contact@ecole-webstart.com</span>
            </div>
            <form @submit.prevent="handleSubmit" id="user_info">
                <h1>Vos informations</h1>
                <div class="form-group">
                    <label for="name">Nom *</label>
                    <input type="text" placeholder="John Doe" v-model="user.name" id="name" name="name" class="form-control"
                           :class="{ 'is-invalid': submitted && $v.user.name.$error }"/>
                    <div v-if="submitted && !$v.user.name.required" class="invalid-feedback">name is required</div>
                </div>
                <div class="form-group">
                    <label for="firstName">Prénom *</label>
                    <input type="text" placeholder="John" v-model="user.firstName" id="firstName" name="firstName" class="form-control"
                           :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"/>
                    <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">firstName is required</div>
                </div>
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" placeholder="E-mail" v-model="user.email" id="email" name="email"
                           class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }"/>
                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                        <span v-if="!$v.user.email.required">Email is required</span>
                        <span v-if="!$v.user.email.email">Email is invalid</span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="object">Objet</label>
                    <input type="text" placeholder="Votre objet" v-model="user.object" id="object" name="object" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" placeholder="Text..." v-model="user.message"  class="form-control"
                              ></textarea>
                </div>
                <div class="btn_wrapper">
                    <UButton size="large" content="Envoyer"/>
                </div>
            </form>
        </div>
        <footer>
            <iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.3562791461113!2d2.360851415640525!3d48.87048430780921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e0950555883%3A0x25e6ea66d950d9ec!2s19%20Rue%20Yves%20Toudic%2C%2075010%20Paris!5e0!3m2!1sfr!2sfr!4v1593293611947!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </footer>
    </div>
</template>

<script>
    import {required, email, minLength, maxLength} from "vuelidate/lib/validators";

    import {} from "@/components/structural";

    import {UButton} from "@/components/unit";

    export default {
        data() {
            return {
                user: {
                    name: "",
                    firstName: "",
                    email: "",
                    object: "",
                    message: "",
                },
                submitted: false,
            }
        },
        validations: {
            user: {
                name: {required},
                firstName: {required},
                email: {required, email},
            }
        },
        mounted() {

        },
        methods: {
            handleSubmit: async function (e) {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid)
                    return

                try {
                    await  this.$store.dispatch('baskets/sendBasket', {
                        user: this.user,
                    })
                    alert('Email envoyé')
                } catch (e) {
                    alert(e)
                }
            },
        },

        components: {
            UButton,
        }
    };
</script>

<style>
    #container {
        padding: 15px 0 0 0;
    }
</style>

<style lang="scss" scoped>
    @import "Contact";
</style>
