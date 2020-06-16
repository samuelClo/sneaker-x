(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fakedata_fake_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/fakedata/fake.data */ "./resources/vue/fakedata/fake.data.js");
/* harmony import */ var _components_structural__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/structural */ "./resources/vue/components/structural/index.js");
/* harmony import */ var _components_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/unit */ "./resources/vue/components/unit/index.js");
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
      arrivage: _fakedata_fake_data__WEBPACK_IMPORTED_MODULE_0__["arrivage"],
      arrivagePicture: [],
      arrivageText: [],
      dixProduitsAleatoire: _fakedata_fake_data__WEBPACK_IMPORTED_MODULE_0__["dixProduitsAleatoire"],
      cinqNewsLast: _fakedata_fake_data__WEBPACK_IMPORTED_MODULE_0__["cinqNewsLast"]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.arrivage.forEach(function (el) {
      _this.arrivagePicture.push(el.image);

      _this.arrivageText.push(el.name);
    });
  },
  computed: {},
  components: {
    SCarouselProduct: _components_structural__WEBPACK_IMPORTED_MODULE_1__["SCarouselProduct"],
    UProductCard: _components_unit__WEBPACK_IMPORTED_MODULE_2__["UProductCard"],
    UNewsCard: _components_unit__WEBPACK_IMPORTED_MODULE_2__["UNewsCard"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js??ref--10!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#wrapperHome #carousel-test #carousel {\n  width: 800px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js??ref--10!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#productGrid[data-v-596c3ccb], #newsGrid[data-v-596c3ccb] {\n  margin: 0 auto;\n  width: 80vw;\n  background-color: inherit;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(284px, 1fr));\n  padding: 32px 32px 0;\n  transition: margin-top 0.2s;\n  position: relative;\n  z-index: 1;\n}\n#productGrid[data-v-596c3ccb] {\n  width: 80vw;\n  grid-gap: 30px;\n}\n#newsGrid[data-v-596c3ccb] {\n  width: 60vw;\n  grid-gap: 15px;\n}\n@media screen and (max-width: 1024px) {\n#productGrid[data-v-596c3ccb] {\n    width: 90vw;\n}\n#newsGrid[data-v-596c3ccb] {\n    width: 70vw;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js??ref--10!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--10!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/sass-loader/dist/cjs.js??ref--10!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--10!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=template&id=596c3ccb&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/vue/pages/Home.vue?vue&type=template&id=596c3ccb&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { attrs: { id: "wrapperHome" } },
    [
      _c("SCarouselProduct", {
        attrs: {
          productsPicture: _vm.arrivagePicture,
          "products-text": _vm.arrivageText,
          id: "carousel-test"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "productGrid" } },
        _vm._l(_vm.dixProduitsAleatoire, function(product) {
          return _c("UProductCard", {
            key: product.id,
            attrs: {
              name: product.name,
              picture: product.image,
              price: product.price,
              id: product.id
            }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "newsGrid" } },
        _vm._l(_vm.cinqNewsLast, function(news) {
          return _c("UNewsCard", {
            key: news.id,
            attrs: {
              title: news.title,
              date: news.date,
              summary: news.summary,
              id: news.id
            }
          })
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/vue/fakedata/fake.data.js":
/*!*********************************************!*\
  !*** ./resources/vue/fakedata/fake.data.js ***!
  \*********************************************/
/*! exports provided: arrivage, dixProduitsAleatoire, allProduct, cinqNewsLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrivage", function() { return arrivage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dixProduitsAleatoire", function() { return dixProduitsAleatoire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allProduct", function() { return allProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cinqNewsLast", function() { return cinqNewsLast; });
var arrivage = [{
  name: "Adidas UltraBoost DNA",
  brand: "Adidas",
  image: "adidas-ultraboost-dna-leather-white-eh1210-pic1-1100x771_lbmvjm.jpg",
  brand_id: 3
}, {
  name: "Jonah Hill x Adidas Superstar",
  brand: "Adidas",
  image: "jonah-hill-adidas-superstar-fw7577-pic05_urjkzm.jpg",
  brand_id: 3
}, {
  name: "Adidas 4D Run 1.0",
  brand: "Adidas",
  image: "adidas-4d-run-1-0-grey-fw1233-pic01_uvlijn.jpg",
  brand_id: 3
}, {
  name: "Adidas Ultra Boost 2020",
  brand: "Adidas",
  image: "adidas-ultra-boost-2020-metallic-copper-eg0721-pic2_wkpqpx.jpg",
  brand_id: 3
}];
var cinqNewsLast = [{
  "title": "Air Jordan 1 Retro High OG « Light Smoke Grey »",
  "summary": "Une nouvelle Air Jordan 1 Hi rappelle la collaboration avec le shop Union",
  "date": "01/06/2000",
  "id": 1
}, {
  "title": "Human Made x adidas Superstar 80’s",
  "summary": "Trois adidas Superstar ont été conçues pour la suite du partenariat avec Human Made",
  "date": "01/06/2000",
  "id": 2
}, {
  "title": "Adidas Yeezy Boost 700 MNVN “Bone”",
  "summary": "La dernière évolution de l’adidas Yeezy Boost 700 dans un coloris exclusif",
  "date": "01/06/2000",
  "id": 3
}, {
  "title": "Girls Are Awesome x adidas SS20",
  "summary": "Les femmes sont à l’honneur avec cette nouvelle collection entre le label Girls Are Awesome et adidas.",
  "date": "01/06/2000",
  "id": 4
}, {
  "title": "Tyler, The Creator x Converse Gianno – Summer 2020",
  "summary": "Le rappeur dévoile sa nouvelle collection footwear pour la belle saison",
  "date": "01/06/2000",
  "id": 5
}];
var dixProduitsAleatoire = [{
  id: 1,
  name: "Air Force 1 Low",
  price: 110,
  image: "nike-air-force-1-low-sketch-white-black-cw7581-101-pic01-1100x773_d1mncv.jpg"
}, {
  id: 2,
  name: "Blazer Mid '77",
  price: 100,
  image: "nike-blazer-mid-77-cw7073-100-pic01_wrdumh.jpg"
}, {
  id: 3,
  name: "Nike Air Max",
  price: 180,
  image: "nike-air-max-tailwind-4-se-acg-cu9240-001-pic01_kkwtnz.jpg"
}, {
  id: 4,
  name: "Nike KD 13",
  price: 150,
  image: "nike-kd-13-butterflies-chains-ci9948-600-pic01_xkjst9.jpg"
}, {
  id: 5,
  name: "ASICS GEL-Lyte III",
  price: 120,
  image: "asics-gel-lyte-3-barcode-1191a336-001-pic01_eiskj2.jpg"
}, {
  id: 6,
  name: "Vivienne Westwood x Asics",
  price: 200,
  image: "vivienne-westwood-asics-hyperdel-lyte-01_rfhxln.jpg"
}, {
  id: 7,
  name: "Asics Gel Kayano 5 OG",
  price: 140,
  image: "asics-gel-kayano-5-og-blue-yellow-001_otgseq.jpg"
}, {
  id: 8,
  name: "Asics Gel Lyte III",
  price: 145,
  image: "asics-gel-lyte-III-lacquer-pack-1_jyek97.jpg"
}, {
  id: 9,
  name: "ASICS Gel-Lyte III",
  price: 140,
  image: "asics-gel-lyte-iii-okayama-denim-black_kg3u7a.jpg"
}, {
  id: 10,
  name: "Def Jam x Puma Clyde Sky LX",
  price: 90,
  image: "def-jam-puma-clyde-sky-lx-fear-of-a-black-planet-374539_01-pic01_caaz3x.jpg"
}];
var allProduct = [{
  name: "Air Jordan 1 Mid",
  brand: "Jordan",
  color: "Alternate Swoosh",
  description: "Cette version mid de la populaire Air Jordan 1 est dotée d’une empeigne en cuir, affichant une combinaison intemporelle de noir et de blanc. On découvre ensuite des swoos en cuir verni, déclinés en rouge sur les côtés extérieurs et en jaune à l’intérieur. Un Jumpman sur la languette, un logo Wings gravé au niveau de la cheville, ainsi qu'une semelle blanche combinée à une outsole vert émeraude, finalisent le design de Peter Moore.",
  price: 110,
  release_date: "2020-04-18",
  image: "air-jordan-1-mid-alternate-swoosh-bq6472-063-pic1_zd4ibz.jpg",
  brand_id: 2
}, {
  name: "Air Jordan 1 Mid",
  brand: "Jordan",
  color: "White Snakeskin",
  description: "Avec l’arrivée du beau temps, la marque au Jumpman nous propose une nouvelle interprétation du design de Bruce Kilgore. À première vue, la silhouette introduite en 1985 bénéficie d’une simple robe en cuir blanc. Toutefois, lorsqu’on observe cette version Mid d’un peu plus prêt, on remarque un imprimé snakeskin relativement discret sur toute l’empeigne. Une touche de noir sur le Jumpman de la languette, un logo Wings gravé à la hauteur de la cheville et une semelle blanche complètent ce look immaculé.",
  price: 110,
  release_date: "2020-04-18",
  image: "air-jordan-1-mid-white-snakeskin-bq6472-110-pic01_q5hc6a.jpg",
  brand_id: 2
}, {
  name: "Air Jordan 1 Low SE",
  brand: "Jordan",
  color: "Laser",
  description: "La lowtop associe du suede perforé bleu, du cuir blanc et du cuir noir. On remarque également un effet satiné sur la languette dotée d'un logo Jumpman bleu brodé dessus. Un numéro 23 blanc au niveau des lacets et un logo wings ton-sur-ton sur les talons complètent l'ensemble.",
  price: 100,
  release_date: "2020-03-30",
  image: "air-jordan-1-low-se-black-laser-blue-ck3022-004-pic01_vghl4c.jpg",
  brand_id: 2
}, {
  name: "Melody Ehsani x Air Jordan OG",
  brand: "Jordan",
  color: "SP",
  description: "À l’occasion du mois de l’histoire des femmes, la créatrice de Los Angeles nous présente une nouvelle collaboration inspirée de la WNBA, de la première silhouette Jordan imaginée pour le beau sexe ou encore de la comédie romantique Love & Basketball.\n\nSuite au teaser instagram, Melody Ehsani lève le voile sur sa nouvelle collaboration avec Jordan Brand. La Air Jordan Women’s affiche une base totalement noire, associée à des détails rouges et des superpositions ondulées réfléchissantes. On remarque enfin des deubrés en forme de cerises, ainsi que les initiales de Melody sur le talon et les insoles.",
  price: 150,
  release_date: "2020-03-19",
  image: "melody-ehsani-air-jordan-womens-CQ2514-005-pic01_o37arh.jpg",
  brand_id: 2
}, {
  name: "Air Jordan 1 High",
  brand: "Jordan",
  color: "Zoom R2T",
  description: 'Présentée en 1985, la Air Jordan 1 a connu une multitude de transformations au cours de ces dernières années. Issue de la collection Fearless, qui célèbre l’intronisation de Michael Jordan au Hall Of Fame, cette nouvelle itération bénéficie d’une tige en cuir noir, agrémentée d’une surprenante finition irisée qui recouvre toute l\'empeigne. On remarque enfin une pointe de rouge sur le branding de la languette, l’inscription "C8082-AZ1" gravée sur les talons, ainsi qu’une nouvelle semelle équipée de la technologie Zoom Air et d’une outsole Icy.',
  price: 175,
  release_date: "2019-12-20",
  image: "air-jordan-1-high-zoom-r2t-01_fa8kgz.jpg",
  brand_id: 2
}, {
  name: "Air Jordan 12",
  brand: "Jordan",
  color: "OVO Black",
  description: "Imaginée par le rappeur canadien Drake, la silhouette présente une conception premium en daim/nubuck et cuir galuchat noirs finalisée par une semelle translucide noire pour un rendu monochrome. Le logo du label OVO a été placé sur les semelles intérieures.",
  price: 225,
  release_date: "2020-02-18",
  image: "ovo-air-jordan-12-black_ovz2vx.jpg",
  brand_id: 2
}, {
  name: "Adidas UltraBoost DNA",
  brand: "Adidas",
  color: "Leather White",
  description: "Dans le cadre du 50ème anniversaire de la adidas Superstar, l’équipementier allemand nous présente une nouvelle interprétation de sa célèbre runner. Affichant un look qui n’est pas sans rappeler la collaboration Prada, cette UltraBoost présente une combinaison intemporelle de blanc et de noir. On découvre de nombreuses autres références, à l’instar de la construction intégrale en cuir, des brandings dorés ou encore des rainures que l’on retrouve sur le mudguard. Une semelle Boost blanche, accompagnée d’une outsole assortie, peaufinent l’hommage.",
  price: 160,
  release_date: "2020-01-11",
  image: "adidas-ultraboost-dna-leather-white-eh1210-pic1-1100x771_lbmvjm.jpg",
  brand_id: 3
}, {
  name: "Jonah Hill x Adidas Superstar",
  brand: "Adidas",
  color: "White",
  description: "Le nouvel ambassadeur de la marque aux trois bandes nous propose une interprétation inédite de la adidas Superstar dans le cadre de son 50ème anniversaire. Celle-ci présente une empeigne en cuir blanc, accompagnée de surprenantes bandes en relief sur le quarter panel. On remarque également d’autres nouveautés comme une toebox légèrement lissée, ainsi que des lacets oversize. Les autres finitions comprennent des coutures de baseball, les initiales de l’acteur et un branding Superstar manuscrit sur le talon. On vous rappelle enfin que la collection comprendra aussi deux nouvelles Jonah Hill x adidas Samba.",
  price: 140,
  release_date: "2020-04-11",
  image: "jonah-hill-adidas-superstar-fw7577-pic05_urjkzm.jpg",
  brand_id: 3
}, {
  name: "Adidas 4D Run 1.0",
  brand: "Adidas",
  color: "Grey",
  description: "Cette itération inédite se présente comme le futur du running et arbore une tige en Primeknit agrémentée d’un imprimé abstrait. On découvre ensuite des empiècements thermocollés à l’image du mudguard et des trois bandes latérales, des lacets blancs, ainsi qu’un renfort au talon de couleur corail. Une semelle vert menthe 4D imprimée grâce à la Digital Light Synthesis finalise ce design ultra léger.",
  price: 250,
  release_date: "2020-02-27",
  image: "adidas-4d-run-1-0-grey-fw1233-pic01_uvlijn.jpg",
  brand_id: 3
}, {
  name: "Adidas Ultra Boost 2020",
  brand: "Adidas",
  color: "Metallic Copper",
  description: "En parallèle au coloris Signal Green, la marque aux trois bandes nous présente une déclinaison tout aussi ambitieuse. Elle est pourvue d’une tige blanc cassé, confectionnée avec le nouveau Primeknit+. Elle bénéficie également d’une construction écologique et du système Tailored Fibre Placement sur le mudguard pour le maintien. Le design est complété par des détails noirs, un renfort au talon en 3D, ainsi qu’une semelle Boost agrémentée d’une finition cuivrée.",
  price: 180,
  release_date: "2020-04-10",
  image: "adidas-ultra-boost-2020-metallic-copper-eg0721-pic2_wkpqpx.jpg",
  brand_id: 3
}, {
  name: "Air Force 1 Low",
  brand: "Nike",
  color: "Tear Away Pack",
  description: "En parallèle à la Air Max 98, l’équipementier nous propose une nouvelle édition personnalisable. À première vue, cette Air Force 1 semble être confectionnée avec un velours côtelé blanc. Toutefois, lorsque l’on observe la paire d’un peu plus près, on s’aperçoit rapidement que les superpositions peuvent laisser place à une multitude d’empiècements colorés. La palette de couleurs s'étend du orange au vert, en passant par le bleu, le jaune et le rose. Pour faciliter le custom, on remarque enfin de petites indications parsemées sur le design de Bruce Kilgore.",
  price: 110,
  release_date: "2020-04-10",
  image: "nike-air-force-1-low-tear-away-pack-cj1650-101-pic1_p7kqve.jpg",
  brand_id: 1
}, {
  name: "Air Force 1 Low",
  brand: "Nike",
  color: "Sketch White Black",
  description: 'La version low de la AF-1 imaginée par le designer Bruce Kilgore en 1982 reprend le thème Sketch To Shelf de la Nike Air Max 1 en juillet 2018. La conception en cuir blanc est contrastée par un swoosh dessiné au marqueur noir, par plusieurs inscriptions comme "1982", le branding Nike sur le tag de la languette ou bien le dessin représentant l\'amorti air au talon.',
  price: 110,
  release_date: "2020-01-07",
  image: "nike-air-force-1-low-sketch-white-black-cw7581-101-pic01-1100x773_d1mncv.jpg",
  brand_id: 1
}, {
  name: "Blazer Mid '77",
  brand: "Nike",
  color: "Snakeskin White Red/Blue",
  description: "La silhouette vintage bénéficie d’une base en cuir blanc, complimentée par une languette en nylon et des lacets assortis. Du côté des nouveautés, on remarque que les superpositions abandonnent le traditionnel daim gris au profit d’un cuir blanc ou encore que les habituelles rainures de la semelle laissent place à de petites étoiles pour l’occasion. La touche finale est apportée par un swoosh agrémenté d’une finition snakeskin bleu sur les côtés extérieurs tandis que les côtés opposés optent pour une teinte rouge foncé.",
  price: 100,
  release_date: "2020-01-27",
  image: "nike-blazer-mid-77-cw7073-100-pic01_wrdumh.jpg",
  brand_id: 1
}, {
  name: "Nike Air Max",
  brand: "Nike",
  color: "Tailwind 4 SE ACG",
  description: "Après avoir dévoilé une Nike Air Force 1 Low ACG Khaki Teal et une Nike Air Max 95 ACG Yellow, la marque au swoosh complète son pack commémoratif avec une déclinaison inédite de la Nike Air Max Tailwind 4.\nCelle-ci est pourvue d’un upper en synthétique noir, une couleur que l'on retrouve également sur les superpositions en cuir. Ce design de baroudeur est rehaussé par un dégradé de teintes violettes sur le quarter panel, un mini swoosh jaune ou encore par des unités Air-Sole déclinées en turquoise. Des lacets de randonnée, un tag amovible “Hike Mike” et une semelle blanche peaufinent l’ensemble.",
  price: 180,
  release_date: "2020-04-01",
  image: "nike-air-max-tailwind-4-se-acg-cu9240-001-pic01_kkwtnz.jpg",
  brand_id: 1
}, {
  name: "Nike KD 13",
  brand: "Nike",
  color: "Butterflies & Chains",
  description: "Même s’il ne s’agit pas là d’une collaboration officielle avec Versace, cette déclinaison inédite aurait très bien pu être imaginée par la célèbre maison de haute couture italienne. En effet, la tige en synthétique est recouverte d’un somptueux imprimé qui arbore une combinaison familière de chaînes en or et de papillons.\nOn remarque ensuite quelques accents noirs, ainsi qu’une multitude de détails dorés comme le swoosh latéral qui renforcent cette esthétique luxueuse. Des lacets bicolores, des insoles rouges, ainsi qu’une semelle blanche couplée à une outsole noire, finalisent le design de Kevin Durant.",
  price: 150,
  release_date: "2020-04-13",
  image: "nike-kd-13-butterflies-chains-ci9948-600-pic01_xkjst9.jpg",
  brand_id: 1
}, {
  name: "ASICS GEL-Lyte III",
  brand: "Asics",
  color: "Barcode",
  description: 'Pour son 30ème anniversaire, le design de Shigeyuki Mitsui fait peau neuve et se pare d’une tige en TPE translucide très contemporaine. Inspirée des codes barres, la silhouette affiche un mélange de motifs linéaires et données numériques déclinés en noir et blanc sur le quarter panel et la semelle. On découvre enfin des superpositions en cuir assorties, un branding "Sound Mind, Sound Body" sur la languette, ainsi qu\'une semelle équipée de la technologie Gel.',
  price: 120,
  release_date: "2020-03-27",
  image: "asics-gel-lyte-3-barcode-1191a336-001-pic01_eiskj2.jpg",
  brand_id: 4
}, {
  name: "Vivienne Westwood x Asics",
  brand: "Asics",
  color: "HyperGEL-LYTE",
  description: "Cette déclinaison audacieuse de la Asics HyperGEL-LYTE se pare d’une empeigne en cuir, agrémentée d’un imprimé intégral inspiré des peintures de François Boucher. Au niveau de la palette de couleurs, on retrouve une dominance de tons bleus, ainsi que des accents orangés. Quelques illustrations supplémentaires sur les semelles intérieures, ainsi qu’une midsole blanche couplée à une outsole noire, complètent le look. Sachez enfin qu’une Asics Gel-Saga White et une Asics Gel-DS Trainer sortiront également le même jour.",
  price: 200,
  release_date: "2019-08-17",
  image: "vivienne-westwood-asics-hyperdel-lyte-01_rfhxln.jpg",
  brand_id: 4
}, {
  name: "Asics Gel Kayano 5 OG",
  brand: "Asics",
  color: "Blue Yellow",
  description: "Imaginée par Toshikazu Kayano, la silhouette rétro se pare d’une tige blanche, confectionnée avec un mélange de cuir et de mesh. Elle arbore un branding latéral noir, ainsi que plusieurs touches de bleu, de jaune et de gris parsemées sur toute l’empeigne. Une imposante semelle intermédiaire blanche dotée de la technologie Gel apporte la touche finale.",
  price: 140,
  release_date: "2019-04-07",
  image: "asics-gel-kayano-5-og-blue-yellow-001_otgseq.jpg",
  brand_id: 4
}, {
  name: "Asics Gel Lyte III",
  brand: "Asics",
  color: "Lacquer Pack",
  description: "Ce nouveau modèle nous fait penser à la très célèbre Nike Air Yeezy 2 Black Solar Red. Cependant même s'il se base sur la même palette de couleurs, il s'agit bien là de leur seul point commun.\nAsics nous présente ce modèle entièrement en noir dont le cuir est subtilement texturé. La doublure intérieure en satin rouge apporte la touche de contraste et la semelle extérieure translucide vient achever la silhouette.",
  price: 145,
  release_date: "2019-04-28",
  image: "asics-gel-lyte-III-lacquer-pack-1_jyek97.jpg",
  brand_id: 4
}, {
  name: "ASICS Gel-Lyte III",
  brand: "Asics",
  color: "Okayama Denim",
  description: "La silhouette a une conception en textile denim noir avec un logo en cuir noir contourné de blanc cassé, finalisée par des accents de rouge.",
  price: 140,
  release_date: "2016-08-27",
  image: "asics-gel-lyte-iii-okayama-denim-black_kg3u7a.jpg",
  brand_id: 4
}, {
  name: "Def Jam x Puma Clyde Sky LX",
  brand: "Puma",
  color: "Fear of a Black Planet",
  description: 'Cette nouvelle collaboration rend hommage au troisième album de Public Enemy, un groupe de rap emblématique formé par Chuck D, Flavor Flav, Professor Griff et Terminator X. "Fear of a Black Planet" est sorti le 10 avril 1990 et a été certifié disque de platine aux États-Unis. À noter enfin que l’album a également inspiré une collaboration Supreme x Public Enemy x Undercover en mars 2018.\nLa lowtop est pourvue d’une empeigne en daim rouge, accompagnée d’une Form Stripe noire. L’ensemble est complété par une semelle vintage agrémentée du titre de l’album, un “Puma Clyde” doré sur le quarter panel, ainsi que le logo de Public Enemy sur le tag de la languette, les talons et les semelles intérieures.',
  price: 90,
  release_date: "2020-04-09",
  image: "def-jam-puma-clyde-sky-lx-fear-of-a-black-planet-374539_01-pic01_caaz3x.jpg",
  brand_id: 5
}, {
  name: "Puma Cell",
  brand: "Puma",
  color: "Venom",
  description: "Avec son look athlétique, la paire arbore un style vintage qui réveillera l’OG qui est en vous. Disponible dans les coloris «White/Surf the Web» et «White/Fuchsia», la silhouette rétro conserve son aspect original mais se pare de nouveaux matériaux et d’une technologie améliorée. Cette nouvelle version dispose d'une tige en mesh, agrémentée d’empiècements en suède et en cuir, quelques broderies et une semelle dotée d'une unité Air-Sole.",
  price: 120,
  release_date: "2019-12-06",
  image: "puma-cell-venom-001_nqnpk4.jpg",
  brand_id: 5
}, {
  name: "Puma Suede x Staple",
  brand: "Puma",
  color: "Pigeon",
  description: "Ce n’est pas la première fois que les deux partenaires travaillent ensemble, on se souvient des collaborations sur la Blaze Of Glory, la Suede Pigeon limitée à 500 exemplaires de 2013 ou plus récemment du Suede Pigeon pack.\nSans surprise, la paire est dotée d’une empeigne grise, rehaussée par quelques accents de blanc et de rose. Le branding latéral de la marque au félin arbore un traitement irisé en référence aux plumes que l’on retrouve sur le cou du volatile. Une touche de fourrure au niveau des oeillets et du talon, un logo Pigeon à l’arrière, ainsi qu’un packaging spécial, finalisent le design de cette collaboration inédite.",
  price: 109,
  release_date: "2013-12-06",
  image: "puma-suede-staple-pigeon-001_phbtdr.jpg",
  brand_id: 5
}, {
  name: "Puma Thunder",
  brand: "Puma",
  color: "Spectra Burgundy Black",
  description: "L’imposante silhouette de la marque allemande est dotée d'un mélange de daim, de maille et de cuir. La runner dispose d'une tige de couleur bordeaux, agrémentée d’empiècements noirs, d’une semelle IMEVA et de plusieurs brandings que l’on retrouve sur la languette, le tirant arrière et le quarter panel.",
  price: 130,
  release_date: "2019-08-01",
  image: "puma-thunder-spectra-burgundy-black-001_t2onhu.jpg",
  brand_id: 5
}, {
  name: "PUMA Thunder",
  brand: "Puma",
  color: "Electric",
  description: "La nouvelle silhouette chunky de la marque allemande s'inspire de la McQ Tech Runner Low imaginée par le défunt Alexander McQueen et a été déclinée dans deux coloris: Grey/Purple et White/Silver-Blue. Elle affiche une empeigne en maille blanche contrastée par plusieurs empiècements en cuir synthétique et cuir verni.\nLe tag sur la languette accompagné de l’inscription PUMA sur le tirant du talon, ainsi qu’une semelle IMEVA oversized, rappelant celle de la Balenciaga Triple S, finalisent ce design inspiré du corps humain.",
  price: 130,
  release_date: "2019-08-01",
  image: "puma-thunder-electric-01_dnao1g.jpg",
  brand_id: 5
}];


/***/ }),

/***/ "./resources/vue/pages/Home.vue":
/*!**************************************!*\
  !*** ./resources/vue/pages/Home.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_596c3ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=596c3ccb&scoped=true& */ "./resources/vue/pages/Home.vue?vue&type=template&id=596c3ccb&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/vue/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=scss& */ "./resources/vue/pages/Home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Home_vue_vue_type_style_index_1_id_596c3ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true& */ "./resources/vue/pages/Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_596c3ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_596c3ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "596c3ccb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/vue/pages/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/vue/pages/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/pages/Home.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************!*\
  !*** ./resources/vue/pages/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--10!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vue/pages/Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/vue/pages/Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_1_id_596c3ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--10!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=style&index=1&id=596c3ccb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_1_id_596c3ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_1_id_596c3ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_1_id_596c3ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_1_id_596c3ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_sass_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_1_id_596c3ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/vue/pages/Home.vue?vue&type=template&id=596c3ccb&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/vue/pages/Home.vue?vue&type=template&id=596c3ccb&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_596c3ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=596c3ccb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/vue/pages/Home.vue?vue&type=template&id=596c3ccb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_596c3ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_596c3ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);