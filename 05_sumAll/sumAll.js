const sumAll = function(intOne, intTwo) {
    let validArgs = (Number.isInteger(intOne)) && (Number.isInteger(intTwo));
    let positiveArgs = (intOne > 0) && (intTwo > 0);
    let oneInfTwo = intOne <= intTwo;

    if(positiveArgs && validArgs){
        let intSum = 0;

        if(oneInfTwo){
            let i = intOne;
            while(i !== (intTwo + 1) ){
                intSum += i ;
                i++;
            }
            return intSum;
        }
        else{
            let i = intTwo;

            while(i !== (intOne + 1) ){
                intSum += i ;
                i++;
            }
            return intSum;
        }  
    }

    else{
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
