console.log("\n\n\n" + atob("31313131") + "\n\n\n");
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