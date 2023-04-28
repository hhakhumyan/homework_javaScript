/*
    Task10
    Create a function that takes a string and replaces the vowels with another character.

    a = 1
    e = 2
    i = 3
    o = 4
    u = 5
*/

function replaceVowel(str){
    let result = ''
    let arr = ['a1', 'e2', 'i3', 'o4', 'u5']
    for(let letter of str){let subRes = ''; for(let arrEl of arr){if(letter === arrEl[0]){subRes = arrEl[1]; break} else {subRes = letter}}; result += subRes}  
    return console.log(result)
}
replaceVowel("karachi") // "k1r1ch3"
replaceVowel("chembur") // "ch2mb5r"
replaceVowel("khandbari") // "kh1ndb1r3"