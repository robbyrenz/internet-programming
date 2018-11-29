window.onload = init;

let x = 0;
let y = 1000;
let more = true;

function outputCount(count) {
    document.getElementById('totalSquares').innerHTML = `There are ${count} perfect squares`;
}

function init() {
	// initialize a vaiable that counts up the number of square numbers in ARRAY
	let squareNumbers = 0

    // create 10 web workers, all accessing the same .js file
    for (let i = 0; i < 10; i++)
        createWorker(i);

    // sending more jobs to the web workers that is done
    worker.onmessage = (event) => {
        squareNumbers = event.data;
        if (more)
            // call a function that calls the specified web worker and give it more jobs
            jobsToWorkers(x,y,); // should I include a web worker here as a parameter

    }
    
    // finally, output the number of square numbers all 10 web workers counted up
    outputCount(squareNumbers);
}

function createWorker(i) {
    let worker = new Worker("worker.js");
    worker.id = i;

    worker.postMessage(ARRAY.slice(x,y));
    x += 1000;
    y += 1000;
}

// giving jobs to web workers once they are done
function jobsToWorkers(x,y) {
    for (let i = 0; i < ARRAY.length; i++) {

    }
}
