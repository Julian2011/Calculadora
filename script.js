const result = document.getElementById('result');

let currentNumber = '';
let firstNumber = null;
let operation = null;

const handleClick = (value) => {
	if (isNumber(value)) {
		currentNumber += value;
		updateDisplay(currentNumber);
	} else if (isOperator(value)) {
		if (firstNumber === null) {
			firstNumber = Number(currentNumber);
			currentNumber = '';
		} else if (currentNumber !== '') {
			const secondNumber = Number(currentNumber);
			const total = calculate(firstNumber, secondNumber, operation);
			updateDisplay(total);
			firstNumber = total;
			currentNumber = '';
		}
		operation = value;
	} else if (value === '=') {
		if (firstNumber !== null && currentNumber !== '') {
			const secondNumber = Number(currentNumber);
			const total = calculate(firstNumber, secondNumber, operation);
			updateDisplay(total);
			firstNumber = null;
			currentNumber = total.toString();
			operation = null;
		}
	} else if (value === 'C') {
		currentNumber = '';
		firstNumber = null;
		operation = null;
		updateDisplay('0');
	}
};

const isNumber = (value) => {
	return !isNaN(value) || value === '.';
};

const isOperator = (value) => {
	return value === '+' || value === '-' || value === '*' || value === '/';
};

const calculate = (num1, num2, op) => {
	switch (op) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			return num1 / num2;
		default:
			return null;
	}
};

const updateDisplay = (value) => {
	result.value = value;
};

updateDisplay('0');