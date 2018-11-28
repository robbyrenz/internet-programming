/**
 * @author Robby Renz Abeysinghe
 * Student Number: 3073208
 * Answer 1 of Assignment 4
 */

onmessage = countSquareNumbers;
let squareNumbers = 0;

function countNumber(event) {
    let number = event.data;
	for (let i = 0; i < number.length; i++) {
		if (isSquareNumber(number))
			squareNumbers++;
	}
    // finally, send the result to the main thread
    postMessage(squareNumbers);
    terminate(); // correct?
}

// checks whether a number is a square number
function isSquareNumber(number) {
    if (Number.isInteger(Math.sqrt(number)))
        return true;
}
