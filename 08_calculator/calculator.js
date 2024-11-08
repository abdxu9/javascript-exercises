const add = function(firstNumber, secondeNumber) {
	return firstNumber + secondeNumber;
};

const subtract = function(firstNumber, secondeNumber) {
	return firstNumber - secondeNumber;
};

const sum = function(array) {
  elementSum = 0; 
  while(array.length !== 0){
    elementSum += array[array.length - 1];
    array.pop();
  }
  return elementSum;
};

const multiply = function(array) {
  elementMultiply = 1; 
  while(array.length !== 0){
    elementMultiply = elementMultiply * array[array.length - 1];
    array.pop();
  }
  return elementMultiply;
};

const power = function(numberToPower, power) {
	return Math.pow(numberToPower,power);
};

const factorial = function(number) {
	let factorialOfNumber = 1;
  for(let i = 1; i <= number; i++){
    factorialOfNumber*=i
  }
  return factorialOfNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
