const add = function(firstNumber, secondeNumber) {
	return firstNumber + secondeNumber;
};

const subtract = function(firstNumber, secondeNumber) {
	return firstNumber - secondeNumber;
};

const sum = function(array) {
  let sum = 0
  return array.reduce((element,sum) => element + sum, sum);
};

const multiply = function(array) {
  mult = 1;
  return array.reduce((element,mult) => element * mult,mult)
  
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
