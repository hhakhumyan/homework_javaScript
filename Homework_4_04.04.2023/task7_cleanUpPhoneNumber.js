/*
    Task7
    Given a phone number. Write a function to clean it up, so it is valid.
    The rules are as follows:
    If the phone number is less than 10 digits assume that it is a bad number
    If the phone number is longer than 10, then it is a bad number
    If the phone number is 10 digits assume that it is good
    If the phone number consists of 11 symbols and the first one is + and others are 
    numbers, then trim + and return remaining 10 digits.
    If the phone number contains + symbol more than one, consider it as a bad number.
    If the phone number contains + symbol not as the first character, consider it as a bad 
    number.
    Ignore spaces between digits.

        Input        Output
    "455678"             "Bad number"
    "339 5656888"        "3395656888"
    "+0008989562"        "0008989562"
    "45231489562"        "Bad number"
    "123+2356897452"     "Bad number"

*/

function cleanUpPhoneNumber(num){
    let result = ""
    let reSpl = num.replace(/\s/g, "")

    if(reSpl.indexOf("+", 1) === -1){
        for(let digit of reSpl){
            if(digit !== "+" ){
                result += digit 
            }
        }
    } else {result = "Bad number"}
    if(result.length !== 10){result = "Bad number"}
    return result
}

console.log(cleanUpPhoneNumber("455678"))
console.log(cleanUpPhoneNumber("339 5656888"))
console.log(cleanUpPhoneNumber("+0008989562"))
console.log(cleanUpPhoneNumber("45231489562"))
console.log(cleanUpPhoneNumber("123+2356897452"))