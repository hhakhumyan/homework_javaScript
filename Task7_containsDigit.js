/*
    Task7
    Insert a digit and a number. Check whether the digits contains in the number or not.

    Input      Output  
    5, 2463     'No'
    4, 6        'No'
    8, 45689    'Yes'
*/
// -----------------------------------------------------------
// Option_1

function containsDigitOption_1(digit, number){
    let n = number
    let result = 'No'
    while(n > 0){
        if(n % 10 === digit) {
            result = 'Yes'
            break
        }
        n = (n - n % 10) / 10
    }  
    return result
}

console.log(containsDigitOption_1(5, 2463))
console.log(containsDigitOption_1(4, 6))
console.log(containsDigitOption_1(8, 45689))

// -----------------------------------------------------------
// Option_2

function containsDigitOption_2(digit, number){
    let n = number.toString()
    let result = 'No'
    
    for(let i =0; i < n.length; i++){
        if(n[i] == digit){
            result = 'Yes'
            break
        } 
    }
    return result
}

console.log(containsDigitOption_2(5, 2463))
console.log(containsDigitOption_2(4, 6))
console.log(containsDigitOption_2(8, 45689))

// -----------------------------------------------------------
// Option_3

function containsDigitOption_3(digit, number) {return (number.toString().includes(digit.toString())) ? 'Yes' : 'No'}

console.log(containsDigitOption_3(5, 2463))
console.log(containsDigitOption_3(4, 6))
console.log(containsDigitOption_3(8, 45689))