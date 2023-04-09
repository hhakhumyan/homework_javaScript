/*
    Task8
    Write a function to compute a new string from the given one by moving the first char to 
    come after the next two chars, so "abc" yields "bca". Repeat this process for each 
    subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

    Input   Output
    "dfgjkloyp"  "fgdkljypo"
    "aweyoolp"   "weaooylp"
    "abc"   "bca"
    "123"   "231"
*/

function moveChars(str){
    let count = 0
    let arr =[]
    let a = ""
    for(let i = 0; i<=str.length; i++){  
        if(str[i] !== undefined){a += str[i]}; count += 1
        if(count % 3 === 0){           
           if(a.length === 3){
            arr.push(a[1] + a[2] + a[0])
           a = ""
           } else {arr.push(a)}
        }        
    }
    
    return console.log(arr.join(""))
}
moveChars("dfgjkloyp") // fgdkljypo
moveChars("aweyoolp") // weaooylp
moveChars("12345678") // 23156478
moveChars("abc") // bca