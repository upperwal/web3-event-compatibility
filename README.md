### This module is a compatibility layer to use Solidity Events with web3 v1.x and MetaMask.

**Note: This is a temporary solution till the time MetaMask releases a stable version which supports WebSockets and events**

It uses two versions of web3.
1. web3 v0.20.6 for events/subscriptions
2. web3 v1.x (provided by the user) for everything else.

#### Example Usage

```javascript
var web3 = window.web3

// Checking if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof web3 !== 'undefined') {
	// Use Mist/MetaMask's provider.
	web3 = new Web3(web3.currentProvider)

	// Only using Web3EventCompatibility for injected web3
	var web3Events = new Web3EventCompatibility(web3, window.web3);
	web3 = web3Events.web3

	console.log('Injected web3 detected.');
} else {
	// Fallback to localhost if no web3 injection. We've configured this to
	// use the development console's port by default.
	var provider = new Web3.providers.WebsocketProvider('ws://127.0.0.1:7545')

	web3 = new Web3(provider)

	console.log('No web3 instance injected, using Local web3.');
}
```

```javascript
myContract.events.MyEvent((error, event) => {
	console.log(event); 
})
```

Everything remains same except ```myContract.events.MyEvent``` does not return ```EventEmitter``` hence ```on``` function can not be used (only callback is allowed).
