const fibonacci = function(number) {
    if(number>1){
        fibonacciArray = [0,1];
        for(let i = 0; i <= number -  2; i++){
            lastTwoFibNumber = fibonacciArray.slice(-2);
            newFibNumber = lastTwoFibNumber.reduce((element,sum) => element + sum,0);
            fibonacciArray.push(newFibNumber);
        }
        console.log(fibonacciArray);
        return fibonacciArray.at(-1);
    }
    else if(number == 1){
        return 1;
    }
    else if(number == 0){
        return 0;
    }
    else{
        return 'OOPS'
    }
};
console.log(fibonacci(3));

// Do not edit below this line
module.exports = fibonacci;
