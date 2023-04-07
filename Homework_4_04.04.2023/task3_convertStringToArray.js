/*
Task3
    Given a sentence as a string. Split it according to space and comma and create an array
    consisting of the words of the array. The last word should not contain the last . or ! .

                        Input                                            Output
    "May the Force be with you."                            ["May", "the", "Force", "be", "with", "you"]
    "Keep your friends close, but your enemies closer."     ["Keep", "your", "friends", "close", "but", "your", "enemies", "closer"]
*/

function convertStringToArray(str){
    return str.split(" ", str.length)
}
console.log(convertStringToArray("May the Force be with you."))
console.log(convertStringToArray("Keep your friends close, but your enemies closer."))