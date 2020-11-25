

let num1 = 0;
let num2 = 0;

function operate(operator, num1, num2) {
    
}

function display() {
	//do something
}


function add(num1, num2) {
	return (num1 + num2);
}

function subtract(num1, num2) {
	return (num1 - num2);
}

function sum (array) {
	return array.reduce((total, current) => total + current, 0);
}

function multiply(num1, num2) {
	return (num1 * num2);
}

function divide(num1, num2) {
	return (num1 / num2);
}


function power(num1, num2) {
	return (num1 ** num2);		
}

function factorial(num) {
	if (num == 0) return 1;
	let product = 1;
	for (let i = num; i > 0; i--){
		product *= i;
	}
	return product;
}