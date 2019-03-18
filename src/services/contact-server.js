import tp from "tp-js-sdk";
import abi from '@/../static/json/abi'

window.Web3 || (window.Web3 = require('web3'))

class ContactService {
    web3 = null;
    contactAddress = '0xdf964040703b41e2b64a8eb07368a9163e149e7f';
    // web3 = new Web3('https://rinkeby.infura.io/');//rinkeby测速网络节点地址，开发测试可以使用测试网络，快
    // web3 = new Web3('https://mainnet.infura.io/');//以太坊正式网络节点地址
    contact = null;
    environment = {
        name: '',
        type: ''
    }
    constructor() {
        // Modern dapp browsers..
        if (window.ethereum) {
            this.web3 = new window.Web3(ethereum);
            if (!!window.imToken) {
                this.environment.name = 'imToken DApp browser'
                this.environment.type = 0
                window.ethereum.enable().then(accounts => {
                    window.accounts = accounts
                })
            } else {
                this.environment.name = 'Modern dapp browsers'
                this.environment.type = 1
            }

        }
        // Legacy dapp browsers...
        else if (window.web3) {
            console.log(web3.eth.accounts)
            this.web3 = new window.Web3(web3.currentProvider);
            this.environment.name = 'Legacy dapp browsers'
            this.environment.type = 2
            this.web3.eth.getBlockNumber((code, res) => {
                console.log(`getBlockNumber==${res}`)
            })
        } else if (tp.isConnected()) {
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
        if(this.web3){
            const contract = web3.eth.contract(abi);
            this.contact= contract.at(this.address);
        }
        console.log(`type=${this.environment.type}`,this)
    }

    getAppInfo() {
        const { type } = this.environment
        if (type == 0) {
            imToken.callAPI('user.showAccountSwitch', { chainType: 'ETHEREUM' }, function (err, address) {
                if (err) {
                    console.log('err', err, err.message)
                } else {
                    console.log('address', address)
                }
            })
        } else if (type == 1) {

        } else if (type == 2) {

        } else if (type == 3) {
            return tp.getAppInfo()
        } else {

        }
    }

    getBlockNumber() {
        return new Promise((resolve, reject) => {
            this.web3.eth.getBlockNumber(function (error, number) {
                if (error) {
                    reject(error)
                } else {
                    resolve(number)
                }
            })
        })
    }
    getCurrentWallet() {
        const { type } = this.environment
        console.log('this.web3.eth.defaultAccount',this.web3 && this.web3.eth.defaultAccount)

        return new Promise((resolve, reject) => {
            if (type == 0) {
                imToken.callAPI('user.getCurrentAccount', function(err, address) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(address)
                    }
                })
            } else if (type == 1) {

            } else if (type == 2) {
                resolve(this.web3.eth.defaultAccount)
            } else if (type == 3) {
                return tp.getCurrentWallet().then(res => {
                    const {result,data,msg}=res
                    if (result) {
                        resolve(data.address)
                    }
                })
            } else if (window.web3) {
                reject(this.web3.eth.defaultAccount)
            } else {
                reject(new Error`app close error`)
            }
        })
    }
    getWalletList() {
        const { type } = this.environment
        console.log('this.web3.eth.accounts',this.web3 && this.web3.eth.accounts)
        return new Promise((resolve, reject) => {
            if (type == 0) {
                imToken.callAPI('user.getAccountList', function (err, list) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(list)
                    }
                })
            } else if (type == 1) {

            } else if (type == 2) {
                resolve(this.web3.eth.accounts)
            } else if (type == 3) {
                return tp.getWalletList('eth')
            } else if (window) {
                window.close()
            } else {
                reject(new Error`app close error`)
            }
        })

    }

    sendTransaction(data,value) {
        // {
        //     from: '0xeb1716174f3e7643ebae0183d9d43dad0838bb1b',
        //     to: '0x52a9210b5a4fbaa2ef872f7a28446df02a707afc',
        //     gasPrice: 100000000,
        //     gasLimit: 6000000,
        //     data: '0xaawefwefwefwefwefef',
        //     value: 1000000000
        // }
        const { type } = this.environment

        if (type == 0) {
            this.web3.eth.sendTransaction(this.getParmas(data,value), function (err, address) {
                    console.log(err, address)
            })
        } else if (type == 1) {

        } else if (type == 2) {
            this.web3.eth.sendTransaction(this.getParmas(data,value), function (err, address) {
                    console.log(err, address)
            })
        } else if (type == 3) {
            try {
                console.log('tp.sendEthTransaction')
                tp.sendEthTransaction(this.getParmas(data,value)).then(res => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                })
            } catch (error) {
                console.log(error)
            }
        } else if (window) {
            window.close()
        } else {
            console.error(`app close error`)
        }
    }

    close() {
        const { type } = this.environment
        if (type == 0) {

        } else if (type == 1) {

        } else if (type == 2) {
            window.close()
        } else if (type == 3) {
            tp.close()
        } else if (window) {
            window.close()
        } else {
            console.error(`app close error`)
        }
    } 

    getParmas(data,value=0){
        return {
            from: this.web3.defaultAccount,
            to:this.contactAddress,
            gasPrice: 100000000,
            gasLimit: 6000000,
            data,
            value,
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
