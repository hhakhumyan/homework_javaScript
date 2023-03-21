/*
-------------------------------------------------------------------------------------------------
    Task9
    Enter a positive number. Calculate and print its factorial. ( n! = n * (n-1) * (n-2) * ... * 3 * 
    2 * 1 , 0! = 1 )

    Input      Output
    5        "5! = 120"
    1        "1! = 1"
    7        "7! = 5040"
-------------------------------------------------------------------------------------------------
*/

function factorial(number){
    let result = 1
    for(let i = 1; i <= number; i++){result *= i}
    return result = `${number}! = ${result}`
}

console.log(factorial(5))
console.log(factorial(1))
console.log(factorial(7))
