<template>
    <div class="">
        <ul>
            <li>
                <button @click="getBlockNumber">获取区高：</button>
                {{blockNumber}}
            </li>
            <li>
                <button @click="getBlockNumber">获取区高：</button>
                {{blockNumber}}
            </li>
        </ul>
    </div>
</template>

<script>
//import  from ''
import contactServer from "@/services/contact-server";

export default {
    //组件名
    name: "index",
    //实例的数据对象
    data() {
        return {
            blockNumber: 0
        };
    },
    //数组或对象，用于接收来自父组件的数据
    props: {},
    //计算
    computed: {},
    //方法
    methods: {
        getBlockNumber() {
            contactServer.web3.eth.getBlockNumber().then(blockNumber => {
                this.blockNumber = blockNumber;
            });
        }
    },
    //生命周期函数
    created() {
        console.log("contactServer", contactServer);
        console.log("contactServer accounts", contactServer.web3.eth.accounts);
        // contactServer.web3.eth.accounts.signTransaction(
        //     {
        //         to: "0xF0109fC8DF283027b6285cc889F5aA624EaC1F55",
        //         value: "1000000000",
        //         gas: 2000000,
        //         gasPrice: "234567897654321",
        //         nonce: 0,
        //         chainId: 1
        //     },
        //     "0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318"
        // ).then(console.log).catch( (error)=> {
        //     alert(error)
        // })
        // const code =
        //     "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";
        // contactServer.web3.eth.sendRowTransaction(
        //     {
        //         from: "0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe",
        //         data: code
        //     },
        //     function(error, hash) {
        //         console.log(error, hash)
        //     }
        // );
        contactServer.web3.eth.net.getId((err, netId) => {
            console.log(netId)
            switch (netId) {
                case "1":case 1:
                console.log('This is mainnet')
                break
                case "2":
                console.log('This is the deprecated Morden test network.')
                break
                case "3":
                console.log('This is the ropsten test network.')
                break
                case "4":case 4:
                console.log('This is the Rinkeby test network.')
                break
                case "42":
                console.log('This is the Kovan test network.')
                break
                default:
                console.log('This is an unknown network.')
            }
            })
    },
    beforeMount() {},
    mounted() {
    },
    //监视
    watch: {},
    //组件
    components: {},
    //过滤器
    filters: {},
    //自定义指令
    directive: {}
};
</script>

<!--
	作者：liangyanxiangde@163.com
	时间：2017-03-27
	描述：统一使用less,局部样式
-->
<style lang="less" scoped>
</style>