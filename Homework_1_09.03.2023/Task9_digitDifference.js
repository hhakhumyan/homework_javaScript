/*
    Enter a number. Find the difference between its biggest and smallest digits.

    Input     Output  
    5          0
    152        4
    4593653    6

*/

// -----------------------------------------------------------
// Option_1

function digitDifferenceOption_1(number){
    let n = number
    let minDigit = number
    let maxDigit = 0

    while(n > 0){        
        if(minDigit > n % 10){minDigit = n % 10}
        if(maxDigit < n % 10){maxDigit = n % 10}
        n =(n - n % 10) / 10
    }
    return maxDigit - minDigit
}

console.log(digitDifferenceOption_1(5))
console.log(digitDifferenceOption_1(152))
console.log(digitDifferenceOption_1(4593653))
console.log(digitDifferenceOption_1(1523))

// -----------------------------------------------------------
// Option_2

function digitDifferenceOption_2(number){
    let n = number.toString()
    let minDigit = number
    let maxDigit = 0

    for(let i = 0; i < n.length; i++){
        if(minDigit > n[i]){minDigit = n[i]}
        if(maxDigit < n[i]){maxDigit = n[i]}
    }
    return maxDigit - minDigit
}

console.log(digitDifferenceOption_2(5))
console.log(digitDifferenceOption_2(152))
console.log(digitDifferenceOption_2(4593653))
console.log(digitDifferenceOption_2(1523))