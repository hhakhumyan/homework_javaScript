/*
    Task2
    Given a large number. Find the difference between the most appeared largest and smallest digits.
*/

function  maxMinSum(number){
    let MaxMinDigit = [number, 0]
    for(let digit of number.toString()){
        if(+digit <= MaxMinDigit[0]){MaxMinDigit[0] = +digit}
        if(+digit >= MaxMinDigit[1]){MaxMinDigit[1] = +digit}
    }
    return console.log(MaxMinDigit[0] + MaxMinDigit[1])
}

maxMinSum(12345678)