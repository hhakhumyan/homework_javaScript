/*
    Task4
    Write a function to find longest substring in a given a string without repeating characters 
    except space character. If there are several, return the last one. Consider that all letters are lowercase.
                                     Input                                  Output
    "listen", ["enlists", "google", "inlets", "banana"]                  ["inlets"]
    "pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]    ["licnep", "nilcpe"]
*/

function selectTheCorrectSublist(str, arr){
    let arrResult = []
    for(let i = 0; i < arr.length; i++){
        let isSubstring = true
        for(let j = 0; j < str.length; j++){         
            if(arr[i].indexOf(str[j]) === -1){
                isSubstring = false; break
            }
        }
        if(isSubstring === true && str.length === arr[i].length) arrResult.push(arr[i])
    }   
    return console.log(arrResult)
}
selectTheCorrectSublist("listen", ["enlists", "google", "inlets", "banana"])                 // ["inlets"]
selectTheCorrectSublist("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"])   // ["licnep", "nilcpe"]