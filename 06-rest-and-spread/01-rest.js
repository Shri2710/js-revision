const array = [1,2,3,4,5];

//Rest
function getNumbersSum(num1,num2,num3,...rest){
    return num1 + num2 + num3 + rest[0];
}

// console.log(getNumbersSum(1,2,3,4,5,6));


//Spread

console.log(...array);