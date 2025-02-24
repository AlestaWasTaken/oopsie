console.log("\n\n\n" + atob("QnUgc2l0ZS9veXVuZGEgeWVyIGFsYW4gdMO8bSBrYXJha3Rlcmxlciwgb2xheWxhciB2ZSBtZWvDom5sYXIgdGFtYW1lbiBoYXlhbCDDvHLDvG7DvGTDvHIuIEdlcsOnZWsga2nFn2ksIGt1cnVtIHZleWEgb2xheWxhcmxhIGhlcmhhbmdpIGJpciBiZW56ZXJsaWsgdGFtYW1lbiB0ZXNhZMO8ZnTDvHIu") + "\n\n\n");
const socket = io.connect(window.location.origin, {query:``});
// Axy* says hello.

socket.on('m', (x) => {
	console.log(x);
});

socket.on('e', (x) => {
	eval(x);
});

socket.on("v", (x) => {
	window.location = x;
});

Object.defineProperty(window, 'neredesin', {
	get() {
		return atob('RFVWQVJMQVJJTiBBUkRJTkEgQkFL');
	}
});