/*
Task4
    Given a string and symbols. Change first symbol by the second one in the string.

                        Input                                      Output
    “The results are not recorded yet”, “t”, “w”      “The resulws are now recorded yew”
    “does the following code”, “o”, “0”               “d0es the f0ll0wing c0de”
*/

function replacingCharactersInWord(str, symbolSearch, ChangeToSymbol ){
    let result = ""
    for(let symbol of str){
        if(symbolSearch === symbol){
            result += ChangeToSymbol
        } else {
            result += symbol
        }
    }
    return result
}

console.log(replacingCharactersInWord("The results are not recorded yet", "t", "w"))
console.log(replacingCharactersInWord("does the following code", "o", "0"))
