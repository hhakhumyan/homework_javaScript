/*
  Task2
  Given a positive integer. Bring the last digit of the number to the beginning. Print the new
  number. If the last digit of the inserted number is 0, number remains the same.

  Input        Output
    367          736
    1002         2100
    250          250
    8            8
*/

// -----------------------------------------------------------
// Option_1_1

function moveTheLastNumberToThBeginningOption_1_1(number){
  if(number % 10 === 0 || number < 10) return number  
  return ('' + number % 10 + (number - number % 10) / 10)
}

console.log(moveTheLastNumberToThBeginningOption_1_1(367))
console.log(moveTheLastNumberToThBeginningOption_1_1(1002))
console.log(moveTheLastNumberToThBeginningOption_1_1(250))
console.log(moveTheLastNumberToThBeginningOption_1_1(8))

// -----------------------------------------------------------
// Option_1_2 

let moveTheLastNumberToThBeginningOption_1_2 = (number) => ((number % 10 === 0 || number < 10) ? number : '' + number % 10 + (number - number % 10) / 10)

console.log(moveTheLastNumberToThBeginningOption_1_2(367))
console.log(moveTheLastNumberToThBeginningOption_1_2(1002))
console.log(moveTheLastNumberToThBeginningOption_1_2(250))
console.log(moveTheLastNumberToThBeginningOption_1_2(8))

// -----------------------------------------------------------
// Option_2

let moveTheLastNumberToThBeginningOption_2 = (number) =>(String(number).slice(-1) === '0') ? number : String(number).slice(-1) + String(number).slice(0, String(number).length-1)

console.log(moveTheLastNumberToThBeginningOption_2(367))
console.log(moveTheLastNumberToThBeginningOption_2(1002))
console.log(moveTheLastNumberToThBeginningOption_2(250))
console.log(moveTheLastNumberToThBeginningOption_2(8))