/*
-------------------------------------------------------------------------------------------------
    Task8
    Given a number. Print all prime factors of the number.
    Дано число. Выведите все простые множители числа.

    Input      Output
    420       "2, 3, 5, 7"
    99        "3, 11"
-------------------------------------------------------------------------------------------------
*/

function factorsOfTheNumber(number){
    let result = ""
    for(let i = 2; i < number; i++){
        let count = 0
        for(let a = 1; a < i; a++){
            if(i % a === 0){count += 1}
        }
        if(count === 1 && number % i === 0){
            result += (result === "") ? i : ", " +i
        }
    }
    return result
}
console.log(factorsOfTheNumber(99))
console.log(factorsOfTheNumber(420))
