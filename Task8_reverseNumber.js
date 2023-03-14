/*
    Task8
    Enter a number. Reverse its first and last digits. Print the new number.

    Input     Output  
    2         2
    13        31
    895796    695798

*/

// -----------------------------------------------------------
// Option_1

function reverseNumberOption_1(number){
    let n = number
    let result = 0
    let multiplier = 1
    while(n > 0){
        result = result * multiplier + n % 10
        multiplier = 10
        n = (n - n % 10) / 10
    }
    return result
}
console.log(reverseNumberOption_1(2))
console.log(reverseNumberOption_1(13))
console.log(reverseNumberOption_1(895796))

// -----------------------------------------------------------
// Option_2

function reverseNumberOption_2(number){
    let n = number.toString()
    let result = ''
    for(let i = n.length - 1; i >= 0; i--){
        // console.log(n[i])
        result = result + n[i]
    }
    return +result 
}
console.log(reverseNumberOption_2(1234))
console.log(reverseNumberOption_2(2))
console.log(reverseNumberOption_2(13))
console.log(reverseNumberOption_2(895796))