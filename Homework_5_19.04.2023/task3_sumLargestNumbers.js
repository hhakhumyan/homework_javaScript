/*
    Task3
    Write a function, which receives a string, finds possible largest numbers in the string and
    returns their sum.
           Input            Output
    "FwrtY45KHL120mn10P"     175
    "Wert12lop-12"            0
*/

function sumLargestNumbers(string){
    let sumNumber = 0
    let lastNum =''
    for(let el of string+'n'){
        if(0/el === 0 || el == 0 || el == '-'){lastNum += el} else {sumNumber += +lastNum; lastNum =''}
    }
    return console.log(sumNumber)
}
sumLargestNumbers('FwrtY45KHL120mn10P') // 175
sumLargestNumbers('Wert12lop-12') // 0