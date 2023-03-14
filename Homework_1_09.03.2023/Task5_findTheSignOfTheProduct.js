/*
    Taks5
    Find the sign of product of three numbers without multiplication operator. Display the 
    specified sign.

      Input         Output
    -14, 5, 0     'unsigned'
    -8, 9, -6        '+'
    4, 19, -2        '-'
    */

    function findTheSignOfTheProduct(num1, num2, num3){
      return (num1 * num2 * num3) === 0 ? 'unsigned' : ((num1 * num2 * num3) > 0 ? '+' : '-')
    }


    console.log(findTheSignOfTheProduct(-14, 5, 0))
    console.log(findTheSignOfTheProduct(-8, 9, -6))
    console.log(findTheSignOfTheProduct(4, 19, -2))





