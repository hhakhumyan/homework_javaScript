/*
Task7
Create a function that concatenates n input arrays, where n is variable.

concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
*/


function concat(arr1, arr2, arr3){
    let result = []
    for(let i = 0; i < arr1.length; i++){result.push(arr1[i])}
    for(let i = 0; i < arr2.length; i++){result.push(arr2[i])}
    for(let i = 0; i < arr3.length; i++){result.push(arr3[i])}

    console.log(result)
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]))
console.log(concat([1, 2, 3], [4, 5], [6, 7]))
console.log(concat([1, 2, 3], [4, 5], [6, 7]))
console.log(concat([1, 2, 3], [4, 5], [6, 7]))



