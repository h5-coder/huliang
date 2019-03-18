<template>
    <div class="index">
        <ul>
            <li>
                <span>运行环境：</span>
                {{environment}}
            </li>
            <li>
                <span>当前用户：</span>
                {{curWallet}}
            </li>
            <li>
                <button @click="getBlockNumber">获取区高：</button>
                {{blockNumber}}
            </li>
            <li>
                <button @click="getBlockNumber">获取区高：</button>
                {{blockNumber}}
            </li>
            <li>
                <button @click="getAppInfo">getAppInfo</button>
                <pre>{{appInfo}}</pre>
            </li>
            <li>
                <button @click="getWalletList">getWalletList</button>
                <pre>{{walletList}}</pre>
            </li>
            <li>
                <button @click="sendTransaction">sendTransaction</button>
                <pre>{{walletList}}</pre>
            </li>
            <li>
                <button @click="close">关闭应用</button>
            </li>
        </ul>
        <p>合约方法：</p>
        <ul>
            <li>
            <button @click="depoist">depoist：</button>
                <span>depoist</span>
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
            blockNumber: 0,
            appInfo: "",
            environment: "",
            curWallet:'',
            walletList:[]
        };
    },
    //数组或对象，用于接收来自父组件的数据
    props: {},
    //计算
    computed: {},
    //方法
    methods: {
        getBlockNumber() {
            contactServer.getBlockNumber().then(res=>{
                this.blockNumber=res
            })
        },
        getAppInfo() {
            this.appInfo = contactServer.getAppInfo();
        },
        getWalletList() {
            contactServer.getWalletList().then(res => {
                this.walletList=res
            });
        },
        close() {
            return contactServer.close();
        },
        sendTransaction(){
            contactServer.sendTransaction()
        },
        depoist(){
            const value = contactServer.web3.toWei('1', 'ether');
            const data= contactServer.contact.depoist.getData()
            contactServer.sendTransaction(data,value)
           console.log(data)
        }
    },
    //生命周期函数
    created() {
        this.environment = contactServer.environment.name;
        contactServer.getCurrentWallet().then(res=>this.curWallet=res)
    },
    beforeMount() {},
    mounted() {},
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
.index {
    min-height: 200px;
    background: #ccc;
}
</style>