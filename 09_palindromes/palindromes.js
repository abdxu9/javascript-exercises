const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const stringNormalized = string.toLowerCase().split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

    const stringReversed = stringNormalized.split("").reverse().join("");

    return (stringReversed === stringNormalized);
};

// Do not edit below this line
module.exports = palindromes;
