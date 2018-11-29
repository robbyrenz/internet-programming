let url = "165.227.32.181/";

function wsUrl() {
    return `ws://${url}`
}

function httpUrl() {
    return `http://${url}`;
}

//JS CODE START
window.onload = jsonp;

// JSONP call to the webservice
function jsonp() {
	let script = document.createElement('script');
	script.src = httpUrl();
	script.src += '?callback=writeOut';
	document.body.appendChild(script);
	console.log(script.src); // debugging purposes...it works!
	openWebSocket;
}

function writeOut(data) {
	process(data);
}

function process(data) {
	let dataString = JSON.stringify(data);
	let dataObj = JSON.parse(dataString);
	document.getElementById('person').innerHTML = `${dataObj.title} ${dataObj.name}`;
}

function openWebSocket() {
	const ws = new WebSocket(wsUrl());
	ws.send(null);
	ws.addEventListener('message', event => {
		if (event.data.id === script.src) {

	}
}

