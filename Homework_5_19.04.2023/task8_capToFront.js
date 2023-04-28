/*
    Task8
    Create a function that moves all capital letters to the front of a word.

    capToFront("hApPy") ➞ "APhpy"
    capToFront("moveMENT") ➞ "MENTmove"
    capToFront("shOrtCAKE") ➞ "OCAKEshrt"
*/

function capToFront(str){
    let lowerCase = ''
    let upperCase = ''

    for(let letter of str){
        if(letter === letter.toLowerCase()) lowerCase += letter
        if(letter === letter.toUpperCase()) upperCase += letter
    }
   return console.log(upperCase + lowerCase)
}

capToFront("hApPy") // "APhpy"
capToFront("moveMENT") // "MENTmove"
capToFront("shOrtCAKE") // "OCAKEshrt"