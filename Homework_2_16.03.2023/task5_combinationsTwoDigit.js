/*
-------------------------------------------------------------------------------------------------
    Task5
    Write a program which will give you all of the potential combinations of a two-digit 
    decimal combination, printed in a comma delimited format
    ‘00’, ‘01’, ‘02’, ..., ‘98’, ‘99’.
-------------------------------------------------------------------------------------------------
*/
function combinationsTwoDigit(){
    let result = '00'
    for(let i = 1; i < 100; i++){
        if(i < 10){
            result = result + ', ' + '0' + i
        } else {result = result + ', ' + i}
    }
    return result + '.'
} 

console.log(combinationsTwoDigit())