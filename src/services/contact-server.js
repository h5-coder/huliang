// const Web3=require('web3')
import tp from "tp-js-sdk";
console.log('window.imToken',window.imToken)
window.Web3 || (window.Web3=require('web3'))
console.log(window.Web3)
class ContactService {
    web3 = null
    // web3 = new Web3('https://rinkeby.infura.io/');//rinkeby测速网络节点地址，开发测试可以使用测试网络，快
    // web3 = new Web3('https://mainnet.infura.io/');//以太坊正式网络节点地址
    environment = {
        name: '',
        type: ''
    }
    constructor() {
        // Modern dapp browsers..
        if (window.ethereum) {
            this.web3 = new window.Web3(ethereum);
            this.environment = 'Modern dapp browsers'
            this.environment.name = 'Modern dapp browsers'
            this.environment.type = 1
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            console.log(web3.eth.accounts)
            this.web3 = new window.Web3(web3.currentProvider);
            this.environment.name = 'Legacy dapp browsers'
            this.environment.type = 2
            this.web3.eth.getBlockNumber((code, res) => {
                alert(`getBlockNumber==${res}`)
            })
        } else if (tp.isConnected()) {
            alert(`tp isConnected==${tp.isConnected()}`)
            this.environment.name = 'TokenPocket dapp browsers'
            this.environment.type = 3
        }
        // Non-dapp browsers...
        else {
            console.log(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
            alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
        // this.web3.eth.getBlockNumber().then(
        //     function(result){
        //         console.log("blockNumber:"+result);
        //     })
    }

    getAppInfo() {
        const { type } = this.environment
        if (type == 1) {

        } else if (type == 2) {

        } else if (type == 3) {
            return tp.getAppInfo()
        } else {

        }
    }

    getBlockNumber() {

    }
    getWalletList() {
        const { type } = this.environment
        if (type == 1) {

        } else if (type == 2) {

        } else if (type == 3) {
            return tp.getWalletList('eth')
        } else if (window) {
            window.close()
        } else {
            console.error(`app close error`)
        }
    }
    sendTransaction() {
        const { type } = this.environment
        if (type == 1) {

        } else if (type == 2) {

        } else if (type == 3) {
            try {
                tp.sendEthTransaction({
                    from: '0x52a9210b5a4fbaa2ef872f7a28446df02a707afc',
                    to: '0x52a9210b5a4fbaa2ef872f7a28446df02a707afc',
                    gasPrice: 100000000,
                    gasLimit: 60000,
                    data: '0xaawefwefwefwefwefef',
                    value: 1000000000
                }).then(res => {
                    alert(res)
                }).catch(error=>{
                    alert(error)
                })
            } catch (error) {
                alert(error)
            }
        } else if (window) {
            window.close()
        } else {
            console.error(`app close error`)
        }
    }

    close() {
        const { type } = this.environment
        if (type == 1) {

        } else if (type == 2) {

        } else if (type == 3) {
            tp.close()
        } else if (window) {
            window.close()
        } else {
            console.error(`app close error`)
        }
    }

    getId() {
        // contactServer.web3.eth.net.getId((err, netId) => {
        //     console.log(netId);
        //     switch (netId) {
        //         case "1":
        //         case 1:
        //             console.log("This is mainnet");
        //             break;
        //         case "2":
        //             console.log("This is the deprecated Morden test network.");
        //             break;
        //         case "3":
        //             console.log("This is the ropsten test network.");
        //             break;
        //         case "4":
        //         case 4:
        //             console.log("This is the Rinkeby test network.");
        //             break;
        //         case "42":
        //             console.log("This is the Kovan test network.");
        //             break;
        //         default:
        //             console.log("This is an unknown network.");
        //     }
        // });
    }
}

//导出一个对象
export default new ContactService();
