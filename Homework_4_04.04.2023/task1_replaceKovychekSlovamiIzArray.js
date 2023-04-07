/*
    Task 1
    Given a sentence with missing words and an array of words. Replace all ‘_’ in a 
    sentence with the words from the array.

            Input                                  Output

    “_, we have a _.”
    [“Houston”, “problem”]               "Houston, we have a problem."

    “If at _ you don’t _, try, try _.”   
    [“first”, “succeed”, “again”]        "If at first you don’t succeed, try, try again."

    “May the _ _ _ _.”
    [“Force”, “be”, “with”, “you”]       "May the Force be with you."
*/

function replaceKovychekSlovamiIzArray(sentences, wordsFromArr){
    let result =''
    let count = 0

    for(let i = 0; i < sentences.length; i++){
        if(sentences[i] === "_"){
            result += wordsFromArr[count]
            count += 1
        } else {
            result += sentences[i]
        }
    }  
    return result
}

console.log(replaceKovychekSlovamiIzArray("_, we have a _.", ["Houston", "problem"]))
console.log(replaceKovychekSlovamiIzArray("If at _ you don’t _, try, try _.", ["first", "succeed", "again"]))
console.log(replaceKovychekSlovamiIzArray("May the _ _ _ _.", ["Force", "be", "with", "you"]))

