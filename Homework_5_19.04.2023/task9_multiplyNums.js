/*
    Task9
    Given a string of numbers separated by a comma and space, return the product of the numbers.
*/
function multiplyNums(str){
    let strToArr = str.split(', ')
    let result = strToArr.reduce((ac, num) => ac*num)
    return console.log(result)
}
multiplyNums("2, 3") // 6
multiplyNums("1, 2, 3, 4") // 24
multiplyNums("54, 75, 453, 0") // 0
multiplyNums("10, -2") // -20