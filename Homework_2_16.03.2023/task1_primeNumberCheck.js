/*
-------------------------------------------------------------------------------------------------
    Task1
    Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

    Input      Output
    401       "Yes"
    63        "No"
-------------------------------------------------------------------------------------------------
*/

function primeNumberCheck(number){
    result = "Yes"
    for(let i = 2; i <=10; i++){
        if(number % i === 0) {
            result = "No"
            break
        } 
    }
    return result
}

console.log(primeNumberCheck(401))
console.log(primeNumberCheck(63))
