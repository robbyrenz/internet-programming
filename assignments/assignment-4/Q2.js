let url = "165.227.32.181/";

function wsUrl() {
    return `ws://${url}`
}

function httpUrl() {
    return `http://${url}`;
}

//JS CODE START
window.onload = init;

function init() {
    importScripts(httpUrl); // parenthesis for the httpUrl function?
}