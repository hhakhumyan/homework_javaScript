/*
  Task4
  Given three numbers. Sort them by the ascending order.

      Input               Output
    45 , 26, 78         26, 45, 78
    -23, -456, 0        -456, -23, 0
  */

// -----------------------------------------------------------
// Option_1
  
  function sortNumbersOption_1(a, b, c){
      if(a >= b && b >= c){
        return c + ', ' + b + ', ' + a
      } else if(a >= c && c >= b){
        return b + ', ' + c + ', ' + a
      } else if(c >= a && a >= b){
        return b + ', ' + a + ', ' + c
      } else if(c >= b && b >= a){
        return a + ', ' + b + ', ' + c
      } else if(b >= c && c >= a){
        return a + ', ' + c + ', ' + b
      } else if(b >= a && a >= c){
        return c + ', ' + a + ', ' + b
      }
    }
    console.log(sortNumbersOption_1(1 , 2, 3))
    console.log(sortNumbersOption_1(45 , 26, 78))
    console.log(sortNumbersOption_1(-23, -456, 0))
    

// -----------------------------------------------------------
// Option_2
   
  function sortNumbersOption_2(a, b, c){
    let result = ''
    let arr = [a, b, c].sort(function(y, x) {
      return x - y;
    })
    for(let n of arr){
      result = n + ', ' + result
      
    }
    return result
  }
  console.log(sortNumbersOption_2(1 , 2, 3))
  console.log(sortNumbersOption_2(45 , 26, 78))
  console.log(sortNumbersOption_2(-23, -456, 0))