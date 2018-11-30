let url = "165.227.32.181/";

function wsUrl() {
    return `ws://${url}`
}

function httpUrl() {
    return `http://${url}`;
}

//JS CODE START
window.onload = jsonp;

let dataObj;

// JSONP call to the webservice
function jsonp() {
	let script = document.createElement('script');
	script.src = httpUrl();
	script.src += '?callback=writeOut';
	document.body.appendChild(script);
	openWebSocket;
}

function writeOut(data) {
	process(data);
}

function process(data) {
	let dataString = JSON.stringify(data);
	dataObj = JSON.parse(dataString);
	document.getElementById('person').innerHTML = `${dataObj.title} ${dataObj.name}`;
}

function openWebSocket() {
	const ws = new WebSocket(wsUrl());
	ws.send(null); // initiating websocket responses
	ws.addEventListener('message', event => {
		if (event.data.id === dataObj.id) 
			document.getElementById('wordsSpoken').appendChild(createLi(event.data.words, event.data.date));
	});
}

function createLi(stuff, moreStuff) {
	let li = document.createElement('li');
	li.innerHTML = stuff +  ' ' + moreStuff;
	return li;
}
