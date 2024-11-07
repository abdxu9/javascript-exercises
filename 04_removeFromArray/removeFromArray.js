const removeFromArray = function(array) {
    let newArray = [];
    const argsToRemove = [...arguments].slice(1);

    array.forEach((element) => {
        if(!argsToRemove.includes(element)){
             newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
