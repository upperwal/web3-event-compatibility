'use strict';

class Contract {
	constructor(jsonInterface, address, options) {
		this.newContract = new Contract.web3New.eth.ContractBackup(jsonInterface, address, options);
		this.oldContract = Contract.web3Old.eth.contract(jsonInterface).at(address)

		this.events = {}
		for(var key in this.newContract.events) {
			if(this.oldContract[key]) {
				this.events[key] = this.oldContract[key]
			}
		}

		this.options = this.newContract.options
		this.clone = this.newContract.clone
		this.deploy = this.newContract.deploy
		this.methods = this.newContract.methods
	}

	once(event, options, callback) {
		console.error('\'once\' method is not supported by event compatibility layer.')
	}

	getPastEvents(event, options, callback) {
		if(event !== 'allEvents') {
			return this.events.allEvents(options, callback)
		}

		return this.events[event].get(callback)

	}

}

module.exports = Contract
