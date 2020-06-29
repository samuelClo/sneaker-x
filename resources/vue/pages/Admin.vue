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
                    <ul class="wrapper_data_model" v-if="Object.keys(getModelData).length > 0">
                        <li
                            class="row_data_item"
                            v-if="Object.keys(getModelData).length > 0"
                            v-for="data in getModelData"
                        >
                            <img
                                v-if="modelInfo.name === 'image' || modelInfo.name === 'banner'"
                                :src="data[modelInfo.name]"
                                :alt="data[modelInfo.name]"
                            >
                            <template v-else>
                                {{data[modelInfo.name]}}
                            </template>
                        </li>
                    </ul>
                </li>
                <li class="row_data row_data_wrapper">
                    <span class="label_model">delete</span>
                    <ul class="wrapper_data_model" v-if="Object.keys(getModelData).length > 0">
                        <li
                            class="row_data_item"
                            v-if="Object.keys(getModelData).length > 0"
                            v-for="data in getModelData"
                            @click="handleDeleteItem(data.id)"
                        >
                            <svg class="delete" viewBox="0 0 365.71733 365" xmlns="http://www.w3.org/2000/svg">
                                <g fill="#f44336">
                                    <path
                                        d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0"/>
                                    <path
                                        d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0"/>
                                </g>
                            </svg>
                        </li>
                    </ul>
                </li>
                <li class="row_data">
                    <span class="label_model">change</span>
                    <ul class="wrapper_data_model" v-if="Object.keys(getModelData).length > 0">
                        <li class=" row_data_item"
                            v-if="Object.keys(getModelData).length > 0"
                            v-for="data in getModelData"
                            @click="handleChangeItem(data)"
                        >
                            <svg class="change" viewBox="-15 -15 484.00019 484" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0"/>
                            </svg>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
<!--        <SModalEdition :model="selectedModel" :data="itemData"/>-->
    </main>
</template>

<script>
    import {mapGetters} from 'vuex'

    import {SModalEdition} from "@/components/structural";
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
                                translatedName: 'bannière',
                            },
                            {
                                name: 'image',
                                placeholder: '',
                                type: 'image',
                                inputType: 'file',
                                isTextArea: false,
                                required: true,
                                translatedName: 'image',
                            },
                            // {
                            //     name: 'description',
                            //     placeholder: 'Votre description',
                            //     type: 'string',
                            //     inputType: 'text',
                            //     isTextArea: false,
                            //     required: false,
                            //     translatedName: 'description',
                            // }
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
                                translatedName: 'image',
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
                DELETE_MODEL_ACTION: {
                    'products': 'products/deleteProduct',
                    'news': 'news/deleteNews',
                    'brands': 'brands/deleteBrand',
                },
                selectedModel: {},
                itemData: {

                },
            }
        },
        mounted() {
        },
        methods: {
            selectModel(modelName) {
                this.selectedModel = this.formData.find(model => model.name === modelName)

                this.$store.dispatch(this.GETTER_MODEL[modelName])
            },
            handleDeleteItem(id) {
                this.$store.dispatch(this.DELETE_MODEL_ACTION[this.selectedModel.name], {
                   id
                })
                console.log(id)
            },
            handleChangeItem(item) {
                this.itemData = item
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
            },
        },
        components: {SModalEdition}
    };
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
    @import "Admin";
</style>
