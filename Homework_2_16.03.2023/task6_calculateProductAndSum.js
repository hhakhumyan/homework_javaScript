/*
-------------------------------------------------------------------------------------------------
    Task6
    Insert a number. Calculate product and sum of the digits of the number. If product is 
    divisible by the sum, print the quotient, otherwise print the remainder.

    Input        Output
    1233    "Quotient is 2."
    5       "Quotient is 1."
    0       "Cannot calculate."
    455     "Remainder is 2."
-------------------------------------------------------------------------------------------------
*/
function calculateProductAndSum(number){
    if(number === 0) return "Cannot calculate."
    let result = 0
    let digit
    let productDigit = 1
    let sumDigit = 0
    while(number){
        digit = number % 10
        productDigit *= +number % 10  
        sumDigit += +number % 10 
        number = (number - number % 10) / 10  
    }
    result = ((productDigit / sumDigit) % 1 === 0) ? `Quotient is ${productDigit / sumDigit}` : `Remainder is ${productDigit % sumDigit}`
    return result
}

console.log(calculateProductAndSum(1233))
console.log(calculateProductAndSum(5))
console.log(calculateProductAndSum(0))
console.log(calculateProductAndSum(455))