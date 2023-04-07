/*
Task6

Write a function that accepts a string(a sentence) as a parameter and finds the longest 
word within the string  If there are several words which are the longest ones, print the .
last word(words can be separated by space, comma or hyphen).

                            Input                                                Output
    "A revolution without dancing is a revolution not worth having."            "revolution"
    "Which would be worse - to live as a monster, or to die as a good man?"     "monster"
*/

function longStringSearch(str){
    let result = ["", -1]
    let reSpl = str.replace(/[,|.|?|-]/g, "").split(" ")

    for(let i = 0; i < reSpl.length; i++){
        if(reSpl[i].length >= result[1]){
            result[1] = reSpl[i].length
            result[0] = reSpl[i]
        }
    }    
    return  result[0]
}

console.log(longStringSearch("A revolution without dancing is a revolution not worth having."))
console.log(longStringSearch("Which would be worse - to live as a monster, or to die as a good man?"))