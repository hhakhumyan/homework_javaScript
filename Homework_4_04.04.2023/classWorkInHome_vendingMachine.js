function calculationOfTheIssuanceOfBanknotes(coins, change){
    let arr = []
    let changeBalance = change
    let i = 0
  
    while(changeBalance > 0){
        if(changeBalance / coins[i] >= 1){
        arr.push(coins[i])
        changeBalance = changeBalance - coins[i]
      } else { 
        i += 1
      }
    }
     console.log(arr)
  }
  
  function vendingMachine(products, money, productNumber){
    let result 
    if(productNumber === 0) {
      return console.log("Enter a valid product number")} else if(products[productNumber - 1].price > money)
      {
        return console.log("Not enough money for this product")
      } else {
      let change = money - products[productNumber - 1].price
      result = change
      calculationOfTheIssuanceOfBanknotes([500, 200, 100, 50, 20, 10], result)
    }
  }
  
  const products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Condoms' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80,  name: 'Small snack' },
  ]
  vendingMachine(products, 200, 7) // { product: "Crackers", change: [ 50, 20, 10 ] }
  vendingMachine(products, 500, 0) // "Enter a valid product number"
  vendingMachine(products, 90, 1) // "Not enough money for this product"