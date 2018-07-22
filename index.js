'use strict';

var Web3 = require('web3')
var Contract = require('./Contract')

var web3_new;
var web3_old;

class Web3Events {
	constructor(web3, windowWeb3) {
		this.web3 = web3
		web3_new = web3

		web3_old = new Web3(
		    windowWeb3.currentProvider
		);

		window.web3_old = web3_old
		console.log(web3_old)
		console.log(web3_new)

		web3.eth.ContractBackup = web3.eth.Contract;
        web3.eth.Contract = Contract;
        web3.eth.Contract.web3Old = web3_old;
        web3.eth.Contract.web3New = web3_new;
	}
}

module.exports = Web3Events
