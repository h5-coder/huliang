//js
import Vue from 'vue'
import router from './router'
// import Mint from 'mint-ui';
// import store from './store/'
import cookie from '@/../static/js/cookie.js'
import filters from './filters/index.js'
import directives from '@/directives/index.js'
import VueI18n from 'vue-i18n'; //多语言
import messages from '@/lang/index';
import VConsole from 'vconsole'
//css
import '../static/css/reset.css'

//less
import "./less/index.less"

let vConsole = new VConsole();

// Vue.use(Mint);
Vue.use(VueI18n)

// router.beforeEach((to, from, next) => {

//     if (false) {
//         next({
//             path: '/index',
//             query: {
//                 redirect: to.fullPath
//             }
//         })
//     } else {
//         next()
//     }
// });
// window.addEventListener("load", async () => {
//     // Modern dapp browsers...
//     if (window.ethereum) {
//         alert(`window.ethereum${JSON.stringify(window.ethereum)}`,)
//         window.web3 = new Web3(ethereum);
//         try {
//             // Request account access if needed
//             await ethereum.enable();
//             alert(111111)
//             // web3.eth.sendTransaction({});
//         } catch (error) {
//             alert(error)
//         }
//     }
//     // Legacy dapp browsers...
//     else if (window.web3) {
//         alert(`window.web3${window.web3}`)
//         console.log(web3.eth.accounts)
//         window.web3 = new Web3(web3.currentProvider);
//         // Acccounts always exposed
//         // web3.eth.sendTransaction({});
//     }
//     // Non-dapp browsers...
//     else {
//         console.log(
//             "Non-Ethereum browser detected. You should consider trying MetaMask!"
//         );
//         alert(
//             "Non-Ethereum browser detected. You should consider trying MetaMask!"
//         );
//     }
// });
const browserLanguage = (navigator.language || navigator.browserLanguage)
    .toLowerCase(),
    i18n = new VueI18n({
        //定义默认语言
        locale: browserLanguage,
        messages,
    });

//Vue.config.silent = true;
Vue.config.productionTip = false;

window.vueVm = new Vue({
    el: '#app',
    data() {
        return {
        }
    },
    router,
    // store,
    i18n,
    //组件
    components: {
    }
});