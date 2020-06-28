<template>
    <main>
        <div id="wrapperList">
            <ul id="title_model_wrapper">
                <li class="title_model" v-for="model in formData" @click="selectModel(model.name)">
                    {{model.translatedName}}
                </li>
            </ul>

            <ul id="wrapper_label_model" v-if="Object.keys(selectedModel).length > 0">
                <li class="row_data row_data_wrapper" v-for="modelInfo in selectedModel.field">
                    <span class="label_model">{{modelInfo.translatedName}}</span>
                    <ul id="wrapper_data_model" v-if="Object.keys(getModelData).length > 0">
                        <li
                            class="row_data_item"
                            v-if="Object.keys(getModelData).length > 0"
                            v-for="data in getModelData"
                        >
                            {{data[modelInfo.name]}}
                        </li>
                    </ul>
                </li>
            </u>
        </div>
    </main>
</template>

<script>
    import {mapGetters} from 'vuex'

    import {} from "@/components/structural";
    import {} from "@/components/unit";

    export default {
        data() {
            return {
                formData: [
                    {
                        name: 'brands',
                        translatedName: 'Marques',
                        field: [
                            {
                                name: 'name',
                                placeholder: 'Votre nom',
                                type: 'string',
                                inputType: 'text',
                                isTextArea: false,
                                required: true,
                                translatedName: 'nom',
                            },
                            {
                                name: 'banner',
                                placeholder: '',
                                type: 'image',
                                inputType: 'file',
                                isTextArea: false,
                                required: true,
                                translatedName: 'image',
                            },
                            {
                                name: 'image',
                                placeholder: '',
                                type: 'image',
                                inputType: 'file',
                                isTextArea: false,
                                required: true,
                                translatedName: 'nom',
                            },
                            {
                                name: 'description',
                                placeholder: 'Votre description',
                                type: 'string',
                                inputType: 'text',
                                isTextArea: false,
                                required: false,
                                translatedName: 'description',
                            }
                        ]
                    },
                    {
                        name: 'products',
                        translatedName: 'Produits',
                        field: [
                            {
                                name: 'name',
                                placeholder: 'Votre nom',
                                type: 'string',
                                inputType: 'text',
                                isTextArea: false,
                                required: true,
                                translatedName: 'nom',
                            },
                            {
                                name: 'image',
                                placeholder: '',
                                type: 'image',
                                inputType: 'file',
                                isTextArea: false,
                                required: true,
                                translatedName: 'nom',
                            },
                            {
                                name: 'description',
                                placeholder: 'Votre description',
                                type: 'string',
                                inputType: 'text',
                                isTextArea: true,
                                required: true,
                                translatedName: 'description',
                            },
                            {
                                name: 'brand',
                                placeholder: 'Marque liée',
                                type: 'string',
                                inputType: 'text',
                                isTextArea: false,
                                required: true,
                                translatedName: 'marque',
                            },
                            {
                                name: 'price',
                                placeholder: 'prix',
                                type: 'int',
                                inputType: 'number',
                                isTextArea: false,
                                required: true,
                                translatedName: 'prix',
                            },
                            {
                                name: 'is_published',
                                placeholder: '',
                                type: 'boolean',
                                inputType: 'checkbox',
                                isTextArea: false,
                                required: true,
                                translatedName: 'publié',
                            },
                        ]
                    },
                    {
                        name: 'news',
                        translatedName: 'News',
                        field: [
                            {
                                name: 'title',
                                placeholder: 'Titre',
                                type: 'string',
                                inputType: 'text',
                                isTextArea: false,
                                required: true,
                                translatedName: 'titre',
                            },
                            {
                                name: 'image',
                                placeholder: '',
                                type: 'image',
                                inputType: 'file',
                                isTextArea: false,
                                required: true,
                                translatedName: 'nom',
                            },
                            {
                                name: 'summary',
                                placeholder: 'résumé',
                                type: 'string',
                                inputType: 'text',
                                isTextArea: false,
                                required: false,
                                translatedName: 'résumé',
                            },
                            {
                                name: 'published_at',
                                placeholder: '',
                                type: 'date',
                                inputType: 'date',
                                isTextArea: false,
                                required: true,
                                translatedName: 'date de publication',
                            },
                            {
                                name: 'content',
                                placeholder: '',
                                type: 'string',
                                inputType: 'text',
                                isTextArea: true,
                                required: true,
                                translatedName: 'contenu',
                            },
                            {
                                name: 'is_published',
                                placeholder: '',
                                type: 'boolean',
                                inputType: 'checkbox',
                                isTextArea: false,
                                required: true,
                                translatedName: 'publié',
                            },
                            {
                                name: 'author',
                                placeholder: '',
                                type: 'string',
                                inputType: 'text',
                                isTextArea: false,
                                required: true,
                                translatedName: 'auteur',
                            },
                        ]
                    },
                ],
                GETTER_MODEL: {
                    'products': 'products/getProducts',
                    'news': 'news/getAllNews',
                    'brands': 'brands/getBrands',
                },
                selectedModel: {}
            }
        },
        mounted() {
        },
        methods: {
            selectModel(modelName) {
                this.selectedModel = this.formData.find(model => model.name === modelName)

                this.$store.dispatch(this.GETTER_MODEL[modelName])
            }
        },
        computed: {
            ...mapGetters({
                news: 'news/allNews',
                brands: 'brands/brands',
                products: 'products/products'
            }),
            getModelData() {
                return this[this.selectedModel.name]
            }
        },
        components: {}
    };
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
    @import "Admin";
</style>
