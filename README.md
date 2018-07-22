### This module is a compatibility layer to use Solidity Events with web3 v1.x and MetaMask.

**Note: This is a temporary solution till the time MetaMask releases a stable version which supports WebSockets and events**

It uses two versions of web3.
1. web3 v0.20.6 for events/subscriptions
2. web3 v1.x (provided by the user) for everything else.

#### Example Usage
```javascript
myContract.events.MyEvent((error, event) => {
	console.log(event); 
})
```

Everything remains same except ```myContract.events.MyEvent``` does not return ```EventEmitter``` hence ```on``` function can not be used (only callback are allowed).
