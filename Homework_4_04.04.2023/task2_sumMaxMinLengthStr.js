/*
    Task2
    Given an array of strings. Find the strings with maximum and minimum lengths in array. 
    Print the sum of their lengths.

                        Input                                            Output
    [“anymore”, “raven”, “me”, “communicate”]                               13
    [“wish”, “slightly”, “understand”, “longer”, “unexpected”, “heart”]     14
*/

function sumMaxMinLengthStr(arr){
    let result = ["", Infinity, -1]
    for(let item of arr){
        if(item.length < result[1]) result[1] = item.length 
        if(item.length > result[2]) result[2] = item.length 
    }
    result[0] = result[1] + result[2]
    return result[0]
}

console.log(sumMaxMinLengthStr(["anymore", "raven", "me", "communicate"]   ))
console.log(sumMaxMinLengthStr(["wish", "slightly", "understand", "longer", "unexpected", "heart"]))