const leapYears = function(year) {
    // Create a function that determines whether or not a given year is a leap year.
    // Leap years are determined by the following rules:

    // > Leap years are years divisible by four (like 1984 and 2004). 
    // However, years divisible by 100 are not leap years (such as 1800 and 1900) 
    // unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 
    // (Yes, it's all pretty confusing)

    divisibleByFour = (year % 4) === 0;
    divisibleByHundred = (year % 100) === 0;
    divisibleByFourHundred =  (year % 400) === 0;

    return divisibleByFour && (!divisibleByHundred || divisibleByFourHundred)   
};

// Do not edit below this line
module.exports = leapYears;
