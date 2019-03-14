webpackJsonp([2],{

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* unused harmony default export */ var _unused_webpack_default_export = ([]);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_number_js__ = __webpack_require__(50);



/* unused harmony default export */ var _unused_webpack_default_export = ([__WEBPACK_IMPORTED_MODULE_0__modules_number_js__["a" /* default */]]);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_zh_cn__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_zh__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_en__ = __webpack_require__(51);




/* harmony default export */ __webpack_exports__["a"] = ({
    zh: __WEBPACK_IMPORTED_MODULE_1__modules_zh__["a" /* default */],
    'zh-cn': __WEBPACK_IMPORTED_MODULE_0__modules_zh_cn__["a" /* default */],
    'zh-hk': '',
    'zh-tw': '',
    en: __WEBPACK_IMPORTED_MODULE_2__modules_en__["a" /* default */],
    'en-us': ''
});

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_index__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_Redirect__ = __webpack_require__(55);







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'history',
    routes: [__WEBPACK_IMPORTED_MODULE_2__map_index__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__map_Redirect__["a" /* default */]]
}));

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 47:
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(14);


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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	msg: 'template'
});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    msg: '模版'
});

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    msg: '模版'
});

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_js_cookie_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filters_index_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_index_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_i18n__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lang_index__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_css_reset_css__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_css_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__static_css_reset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__less_index_less__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__less_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__less_index_less__);




var _this = this;














__WEBPACK_IMPORTED_MODULE_3_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8_vue_i18n__["a" /* default */]);

window.addEventListener("load", __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var enable;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    if (!window.ethereum) {
                        _context.next = 15;
                        break;
                    }

                    alert('window.ethereum' + __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(window.ethereum));
                    window.web3 = new Web3(ethereum);
                    _context.prev = 3;
                    _context.next = 6;
                    return ethereum.enable();

                case 6:
                    enable = _context.sent;

                    alert(enable);
                    _context.next = 13;
                    break;

                case 10:
                    _context.prev = 10;
                    _context.t0 = _context['catch'](3);

                    alert(_context.t0);

                case 13:
                    _context.next = 16;
                    break;

                case 15:
                    if (window.web3) {
                        alert('window.web3' + window.web3);
                        window.web3 = new Web3(web3.currentProvider);
                    } else {
                            console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
                            alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
                        }

                case 16:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, _this, [[3, 10]]);
})));

var browserLanguage = (navigator.language || navigator.browserLanguage).toLowerCase(),
    i18n = new __WEBPACK_IMPORTED_MODULE_8_vue_i18n__["a" /* default */]({
    locale: browserLanguage,
    messages: __WEBPACK_IMPORTED_MODULE_9__lang_index__["a" /* default */]
});

__WEBPACK_IMPORTED_MODULE_3_vue__["a" /* default */].config.productionTip = false;

window.vueVm = new __WEBPACK_IMPORTED_MODULE_3_vue__["a" /* default */]({
    el: '#app',
    data: function data() {
        return {
            loginPopFlag: false,
            redirectPath: ''
        };
    },

    router: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */],

    i18n: i18n,

    components: {}
});

/***/ }),

/***/ 55:
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var Index = function Index(resolve) {
    return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(100)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '/',
    component: Index,
    name: '主页',
    icon: ''
});

/***/ })

},[54]);