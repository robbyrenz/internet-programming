window.onload = init;

// initialize a variable that counts up the number of square numbers in ARRAY
let squareNumbers = 0
let x = 0;
let y = 1000;
let more = true;
let workers = [];

function outputCount(count) {
    document.getElementById('totalSquares').innerHTML = `There are ${count} perfect squares`;
}

function init() {
    initWorkers();

    // output the number of square numbers all 10 web workers counted up
    for (let w in workers)
        count(w);

    if (more)
        jobsToWorkers(x,y);

    outputCount(squareNumbers);
    for (let w in workers)
        terminated(w);
}

function initWorkers() {
    // create 10 web workers, all accessing the same .js file
    for (let i = 0; i < 10; i++)
        workers.push(createWorker(i));
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
        for (let w in workers) {
            w.postMessage(ARRAY.slice(x,y));
            x += 1000;
            y += 1000;
        }
    }
    if (x === 10000000)
        more = false;
}

// stopping each web worker once the array of numbers has been processed
function terminated() {
    workers.forEach(worker => worker.terminate());
}

// counting up the total number of square numbers the worker sent
function count(w) {
    w.onmessage = function(event) {
        squareNumbers += event.data;
    }
}
