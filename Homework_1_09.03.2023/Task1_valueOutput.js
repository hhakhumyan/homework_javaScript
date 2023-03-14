/*
    Task1
    Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

    Input        Output
    3          369
    17         173451
    100        100200300
*/
// -----------------------------------------------------------

function valueOutput(number){
    let result = `${number}${number + number}${number + number + number}`   
    return result
}

console.log(valueOutput(3))
console.log(valueOutput(17))
console.log(valueOutput(100))


function valueOutput(number){
    return `${number}${number + number}${number + number + number}`        
}

console.log(valueOutput(3))
console.log(valueOutput(17))
console.log(valueOutput(100))



