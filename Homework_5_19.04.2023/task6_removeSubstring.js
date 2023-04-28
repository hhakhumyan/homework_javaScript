/*
    Task6
    Write a function which receives two strings and removes appearances of the second 
    string from the first one.

                                     input                                                          output
    "This is some text.", "is"                                                         Th  some text.
    "Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather", "o"     "Yes, Lndn. Yu knw: fish, chips, cup ‘ tea, bad fd, wrse weather"
*/

function removeSubstring(str, substr) {return str.split(substr).join('')}  

console.log(removeSubstring("This is some text.", "is"))
console.log(removeSubstring("Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather", "o"))