const Web3=require('web3')



class ContactService {
    web3 = new Web3('https://rinkeby.infura.io/');//rinkeby测速网络节点地址，开发测试可以使用测试网络，快
    // web3 = new Web3('https://mainnet.infura.io/');//以太坊正式网络节点地址
    constructor() {
        console.log('web3', this.web3)
        this.web3.eth.getBlockNumber().then(
            function(result){
                console.log("blockNumber:"+result);
            })
    }



}

//导出一个对象
export default new ContactService();
