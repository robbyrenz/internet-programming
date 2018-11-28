window.onload = init;

function outputCount(count) {
    document.getElementById('totalSquares').innerHTML = `There are ${count} perfect squares`;
}

function init() {
	// initialize a vaiable that counts up the number of square numbers in ARRAY
	let squareNumbers = 0

    // create 10 web workers, all accessing the same .js file
    for (let i = 0; i < 10; i++)
        createWorker(i);
    
    // finally, output the number of square numbers all 10 web workers counted up
    outputCount(squareNumbers);
}

function createWorker(i) {
    let worker = new Worker("worker.js");
    worker.id = i;
	worker.postMessage(ARRAY);
}

