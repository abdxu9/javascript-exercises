const repeatString = function(string, num) {
    let stringRepeted = string;
    if(num < 0){
        return "ERROR";
    }
    else if(num == 0){
        return "";
    }
    else{
        for(let i = 0; i < num - 1 ; i++){
            stringRepeted = stringRepeted + string;
        }
        return stringRepeted;
    }
};

// Do not edit below this line
module.exports = repeatString;
