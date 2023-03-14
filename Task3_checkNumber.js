/*
  Task3
  Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

  Input             Output
    21     "21 is a multiple of 3 and 7."
    35     "35 is a multiple of 5 and 7."
    13     "13 is not a multiple of 3, 5 or 7."
    420    "420 is a multiple of 3, 5 and 7."
    24     "24 is a multiple of 3."
  */

// Option_1_1 

function checkNumber(number){
  let result = `${number} is not a multiple of 3, 5 or 7.`
  if(number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
    result = `${number} is a multiple of 3, 5 and 7.`
  } else if(number % 3 === 0 && number % 5 === 0 && number % 7 !== 0) {
    result = `${number} is a multiple of 3 and 5.`
  } else if(number % 3 === 0 && number % 5 !== 0 && number % 7 === 0) {
    result = `${number} is a multiple of 3 and 7.`
  } else if(number % 3 !== 0 && number % 5 === 0 && number % 7 === 0) {
    result = `${number} is a multiple of 5 and 7.`
  } else if(number % 3 === 0 && number % 5 !== 0 && number % 7 !== 0) {
    result = `${number} is a multiple of 3.`
  } else if(number % 3 !== 0 && number % 5 === 0 && number % 7 !== 0) {
    result = `${number} is a multiple of 5.`
  } else if(number % 3 !== 0 && number % 5 === 0 && number % 7 === 0) {
    result = `${number} is a multiple of 7.`
  } 
  return result
}

console.log(checkNumber(21))
console.log(checkNumber(35))
console.log(checkNumber(13))
console.log(checkNumber(420))
console.log(checkNumber(24))


 
