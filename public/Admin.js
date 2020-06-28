(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Admin.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/Admin.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_structural__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/structural */ "./resources/vue/components/structural/index.js");
/* harmony import */ var _components_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/unit */ "./resources/vue/components/unit/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formData: [{
        name: 'brands',
        translatedName: 'Marques',
        field: [{
          name: 'name',
          placeholder: 'Votre nom',
          type: 'string',
          inputType: 'text',
          isTextArea: false,
          required: true,
          translatedName: 'nom'
        }, {
          name: 'banner',
          placeholder: '',
          type: 'image',
          inputType: 'file',
          isTextArea: false,
          required: true,
          translatedName: 'image'
        }, {
          name: 'image',
          placeholder: '',
          type: 'image',
          inputType: 'file',
          isTextArea: false,
          required: true,
          translatedName: 'nom'
        }, {
          name: 'description',
          placeholder: 'Votre description',
          type: 'string',
          inputType: 'text',
          isTextArea: false,
          required: false,
          translatedName: 'description'
        }]
      }, {
        name: 'products',
        translatedName: 'Produits',
        field: [{
          name: 'name',
          placeholder: 'Votre nom',
          type: 'string',
          inputType: 'text',
          isTextArea: false,
          required: true,
          translatedName: 'nom'
        }, {
          name: 'image',
          placeholder: '',
          type: 'image',
          inputType: 'file',
          isTextArea: false,
          required: true,
          translatedName: 'nom'
        }, {
          name: 'description',
          placeholder: 'Votre description',
          type: 'string',
          inputType: 'text',
          isTextArea: true,
          required: true,
          translatedName: 'description'
        }, {
          name: 'brand',
          placeholder: 'Marque liée',
          type: 'string',
          inputType: 'text',
          isTextArea: false,
          required: true,
          translatedName: 'marque'
        }, {
          name: 'price',
          placeholder: 'prix',
          type: 'int',
          inputType: 'number',
          isTextArea: false,
          required: true,
          translatedName: 'prix'
        }, {
          name: 'is_published',
          placeholder: '',
          type: 'boolean',
          inputType: 'checkbox',
          isTextArea: false,
          required: true,
          translatedName: 'publié'
        }]
      }, {
        name: 'news',
        translatedName: 'News',
        field: [{
          name: 'title',
          placeholder: 'Titre',
          type: 'string',
          inputType: 'text',
          isTextArea: false,
          required: true,
          translatedName: 'titre'
        }, {
          name: 'image',
          placeholder: '',
          type: 'image',
          inputType: 'file',
          isTextArea: false,
          required: true,
          translatedName: 'nom'
        }, {
          name: 'summary',
          placeholder: 'résumé',
          type: 'string',
          inputType: 'text',
          isTextArea: false,
          required: false,
          translatedName: 'résumé'
        }, {
          name: 'published_at',
          placeholder: '',
          type: 'date',
          inputType: 'date',
          isTextArea: false,
          required: true,
          translatedName: 'date de publication'
        }, {
          name: 'content',
          placeholder: '',
          type: 'string',
          inputType: 'text',
          isTextArea: true,
          required: true,
          translatedName: 'contenu'
        }, {
          name: 'is_published',
          placeholder: '',
          type: 'boolean',
          inputType: 'checkbox',
          isTextArea: false,
          required: true,
          translatedName: 'publié'
        }, {
          name: 'author',
          placeholder: '',
          type: 'string',
          inputType: 'text',
          isTextArea: false,
          required: true,
          translatedName: 'auteur'
        }]
      }],
      GETTER_MODEL: {
        'products': 'products/getProducts',
        'news': 'news/getAllNews',
        'brands': 'brands/getBrands'
      },
      selectedModel: {}
    };
  },
  mounted: function mounted() {},
  methods: {
    selectModel: function selectModel(modelName) {
      this.selectedModel = this.formData.find(function (model) {
        return model.name === modelName;
      });
      this.$store.dispatch(this.GETTER_MODEL[modelName]);
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    news: 'news/allNews',
    brands: 'brands/brands',
    products: 'products/products'
  })), {}, {
    getModelData: function getModelData() {
      return this[this.selectedModel.name];
    }
  }),
  components: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js??ref--10!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapperList[data-v-59c7f413] {\n  display: flex;\n  flex-direction: column;\n  width: 1000px;\n  border: 1px solid #e8e8e8;\n  border-radius: 10px;\n  padding: 10px;\n}\n#title_model_wrapper[data-v-59c7f413] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #e8e8e8;\n}\n#wrapper_label_model[data-v-59c7f413] {\n  display: flex;\n  justify-content: space-between;\n}\n.label_model[data-v-59c7f413] {\n  font-weight: bold;\n}\n.row_data_wrapper[data-v-59c7f413] {\n  display: flex;\n  flex-direction: column;\n}\n.row_data[data-v-59c7f413] {\n  max-width: 240px;\n}\n.row_data_item[data-v-59c7f413] {\n  height: 120px;\n  overflow-y: scroll;\n  word-wrap: break-word;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js??ref--10!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--10!../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Admin.vue?vue&type=template&id=59c7f413&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/Admin.vue?vue&type=template&id=59c7f413&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/vue/pages/Admin.vue":
/*!***************************************!*\
  !*** ./resources/vue/pages/Admin.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_vue_vue_type_template_id_59c7f413_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=59c7f413&scoped=true& */ "./resources/vue/pages/Admin.vue?vue&type=template&id=59c7f413&scoped=true&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./resources/vue/pages/Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Admin_vue_vue_type_style_index_1_id_59c7f413_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true& */ "./resources/vue/pages/Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_59c7f413_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admin_vue_vue_type_template_id_59c7f413_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "59c7f413",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/pages/Admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vue/pages/Admin.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/vue/pages/Admin.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/pages/Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/vue/pages/Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_1_id_59c7f413_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--10!../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Admin.vue?vue&type=style&index=1&id=59c7f413&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_1_id_59c7f413_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_1_id_59c7f413_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_1_id_59c7f413_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_1_id_59c7f413_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_style_index_1_id_59c7f413_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vue/pages/Admin.vue?vue&type=template&id=59c7f413&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/vue/pages/Admin.vue?vue&type=template&id=59c7f413&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_59c7f413_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=template&id=59c7f413&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Admin.vue?vue&type=template&id=59c7f413&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_59c7f413_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_59c7f413_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);