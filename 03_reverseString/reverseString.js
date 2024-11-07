const reverseString = function(string) {
    let stringReversed = [];
    for (let i = 0; i < string.length; i++) {
        stringReversed[i] = string[string.length - 1 - i];
    }
    return stringReversed.join('');
};


// Do not edit below this line
module.exports = reverseString;
