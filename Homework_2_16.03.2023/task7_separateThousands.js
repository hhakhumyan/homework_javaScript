/*
-------------------------------------------------------------------------------------------------
    Task7
    Create a function that takes a number as an argument and returns a string formatted to separate thousands.

    Input      Output
    1000       "1,000"
    100000     "100,000"
    20         "20"
-------------------------------------------------------------------------------------------------
*/
function separateThousands(number){
    let count = 0
    let enumeration = ""
    while(number > 0){
        count += 1
        if(count % 3 === 0){enumeration += number % 10 + ","} else {enumeration += number % 10}
        number = (number - number % 10) / 10
    }    
          
    let result = ""

    if(enumeration[enumeration.length - 1] === ","){
        for(let i = enumeration.length - 2; i >= 0; i--){
            result += enumeration[i] 
        }
    } else {
        for(let i = enumeration.length - 1; i >= 0; i--){
            result += enumeration[i] 
        }
    }    
    return result 
}

console.log(separateThousands(1000))
console.log(separateThousands(100000))
console.log(separateThousands(20))