/*
    Task1
    Write a function to find the count of all vowels in a given string.
*/

function countVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u']; 
    let count = 0; 
    for(let el of str) if(vowels.includes(el.toLowerCase())) count += 1
    return(console.log(count))
}
countVowels('AaeTt')

