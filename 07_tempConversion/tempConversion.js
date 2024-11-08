const convertToCelsius = function(tempInFahrenheit) {
  tempConverted =( tempInFahrenheit - 32) * (5 / 9);
  tempConverted = Math.round(tempConverted * 10) / 10; 
  return tempConverted;
};

const convertToFahrenheit = function(tempInCelsius) {
  tempConverted = (tempInCelsius * (9 / 5) + 32);
  tempConverted = Math.round(tempConverted * 10) / 10;
  return tempConverted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
