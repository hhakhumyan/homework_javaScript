/*
    It's time to send and receive secret messages.
    Create a single function that takes a string or an array and returns a coded or decoded message.
    The first letter of the string, or the first element of the array represents the Character Code of that letter. 
    The next elements are the differences between the characters: e.g. A +3 --> C or z -1 --> y.

    Пришло время отправлять и получать секретные сообщения.
    Создайте единственную функцию, которая принимает строку или массив и возвращает закодированное или декодированное сообщение.
    Первая буква строки или первый элемент массива представляет собой символьный код этой буквы.
    Следующие элементы - это различия между символами: например, A +3 --> C или z -1 --> y.

    difCiph("Hello") ➞ [72, 29, 7, 0, 3]
    // H = 72, the difference between the H and e is 29 (upper- and lowercase).
    // The difference between the two l's is obviously 0.

    // H = 72, разница между H и e составляет 29 (верхний и нижний регистр).
     // Разница между двумя l, очевидно, равна 0.

    difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]) ➞ "Hi there!"
    difCiph("Sunshine") ➞ [83, 34, -7, 5, -11, 1, 5, -9]
*/

function difCiph(stringOrArray){
    if(Array.isArray(stringOrArray)){
        let result = ""
        let prevCharCode = 0
        for(let symbol of stringOrArray){
            result += String.fromCharCode(prevCharCode + symbol)
            prevCharCode += symbol
        }
        return result
    } else if(typeof stringOrArray === "string"){
        let result = []
        let prevCharCode = 0
        for(let i=0; i < stringOrArray.length; i++){
            result.push( stringOrArray[i].charCodeAt(0)-prevCharCode) 
            prevCharCode = stringOrArray[i].charCodeAt(0)
        }
        return result
    }
}
console.log(difCiph("Hello")) // [72, 29, 7, 0, 3]
console.log(difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ])) // "Hi there!"
console.log(difCiph("Sunshine")) // [83, 34, -7, 5, -11, 1, 5, -9]
