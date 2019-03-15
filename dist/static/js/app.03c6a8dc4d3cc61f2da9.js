webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* unused harmony default export */ var _unused_webpack_default_export = ([]);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_number_js__ = __webpack_require__(10);



/* unused harmony default export */ var _unused_webpack_default_export = ([__WEBPACK_IMPORTED_MODULE_0__modules_number_js__["a" /* default */]]);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_zh_cn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_zh__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_en__ = __webpack_require__(11);




/* harmony default export */ __webpack_exports__["a"] = ({
    zh: __WEBPACK_IMPORTED_MODULE_1__modules_zh__["a" /* default */],
    'zh-cn': __WEBPACK_IMPORTED_MODULE_0__modules_zh_cn__["a" /* default */],
    'zh-hk': '',
    'zh-tw': '',
    en: __WEBPACK_IMPORTED_MODULE_2__modules_en__["a" /* default */],
    'en-us': ''
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_Redirect__ = __webpack_require__(15);







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'history',
    routes: [__WEBPACK_IMPORTED_MODULE_2__map_index__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__map_Redirect__["a" /* default */]]
}));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * 作者：梁燕翔
 * 时间：2017/04/11
 * 功能：对cookie的操作
 */

/* unused harmony default export */ var _unused_webpack_default_export = ({
  get(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if(c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  set(cname, cvalue, ms) {
    let d = new Date();
    d.setTime(d.getTime() + ms);
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].filter('number', function (oldValue) {
    var f = parseFloat(oldValue);
    if (isNaN(f)) {
        return;
    }
    var f = Math.round(oldValue * 100) / 100;
    var newValue = f.toString();
    var rs = newValue.indexOf('.');
    if (rs < 0) {
        rs = newValue.length;
        newValue += '.';
    }
    while (newValue.length <= rs + 2) {
        newValue += '0';
    }
    return newValue;
}));

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	msg: 'template'
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    msg: '模版'
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    msg: '模版'
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_cookie_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_index_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_i18n__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lang_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_css_reset_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_css_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_css_reset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__less_index_less__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__less_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__less_index_less__);














__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_vue_i18n__["a" /* default */]);

var browserLanguage = (navigator.language || navigator.browserLanguage).toLowerCase(),
    i18n = new __WEBPACK_IMPORTED_MODULE_5_vue_i18n__["a" /* default */]({
    locale: browserLanguage,
    messages: __WEBPACK_IMPORTED_MODULE_6__lang_index__["a" /* default */]
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

window.vueVm = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    data: function data() {
        return {};
    },

    router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */],

    i18n: i18n,

    components: {}
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '*',
    redirect: {
        path: '/'
    },
    hidden: true
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var Index = function Index(resolve) {
    return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(23)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '/',
    component: Index,
    name: '主页',
    icon: ''
});

/***/ })
],[14]);