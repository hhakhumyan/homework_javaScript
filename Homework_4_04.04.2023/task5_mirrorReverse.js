/*
Task5
    Insert a string. Create new string which is the mirror reverse of the inserted one around its center.

      Input           Output
    "stranger"      "ngerstra"
    "rotator"       "torarot"
*/

function mirrorReverse(str){
    let result = ""
 
    if(str.length % 2 === 0){
        for(let i = str.length - str.length/2 ; i < str.length; i++){
            result += str[i]
        }
        for(let i = 0; i < str.length/2; i++){
            result += str[i]
        }
    } else {
        for(let i = str.length - Math.floor(str.length/2) ; i < str.length; i++){
            result += str[i]
        }
        result += str[Math.floor(str.length/2)]
        for(let i = 0; i < Math.floor(str.length/2); i++){
            result += str[i]
        }
    }
    return result
}

console.log(mirrorReverse("stranger"))
console.log(mirrorReverse("rotator"))