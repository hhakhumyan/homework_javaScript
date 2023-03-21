/*
-------------------------------------------------------------------------------------------------
    Task3
    Given a number n ( n >= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 
    3, 5, 8 ..., ak = ak-1 + ak-2)

    Input      Output
    0           0
    2           1
    10          55
    20          6765
-------------------------------------------------------------------------------------------------
*/

//Option1

  function fibonacciNumberCalculationOption1(n){
    let result
    let febMin1 = 1
    let febMin2 = 0
    if(n === 0){result = 0} 
    else if(n === 1){result = 1; lastFeb = result} 
    else if(n > 1){
      for(let i = 2; i <= n; i++){
        result = febMin1 + febMin2
        febMin2 = febMin1; febMin1 = result
      }
    }
    return result
  }

  console.log(fibonacciNumberCalculationOption1(0))
  console.log(fibonacciNumberCalculationOption1(1))
  console.log(fibonacciNumberCalculationOption1(2))
  console.log(fibonacciNumberCalculationOption1(10))
  console.log(fibonacciNumberCalculationOption1(20))


//Option2 (Իմ լուծումը չի ու չեմ կարում հասկանամ, գրել եմ որպեսզի նայենք)

  function fibonacciNumberCalculationOption2(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacciNumberCalculationOption2(n - 1) + fibonacciNumberCalculationOption2(n - 2);
    }
  }
  
  console.log(fibonacciNumberCalculationOption2(1))
  console.log(fibonacciNumberCalculationOption2(2))
  console.log(fibonacciNumberCalculationOption2(10))
  console.log(fibonacciNumberCalculationOption2(20))