window.onload = init;

function outputCount(count) {
    document.getElementById('totalSquares').innerHTML = `There are ${count} perfect squares`;
}

function init() {
    for (let i = 0; i < 10; i++)
        createWorker(i);
}

function createWorker(i) {
    let worker = new Worker("worker.js");
    worker.id = i;
}
