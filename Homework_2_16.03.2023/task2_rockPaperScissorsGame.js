/*
-------------------------------------------------------------------------------------------------
    Task2
    Write a program that reads two strings for playing the game of Rock-Paper-Scissors. If 
    the strings entered by the user are not  'Paper', 'Rock' or 'Scissors', the program keeps 
    on prompting the user to enter new values. If valid strings are inserted, repeat the loop, 
    until one of the sides wins. (You can use alert instead of console.log).

        Input                    Output
    "Paper", "Pen"            "Invalid input, enter correct value."
    "Paper", "Paper"          "Draw! Enter new values."
    "Paper", "Scissors"       "2nd player wins!"
-------------------------------------------------------------------------------------------------
*/

function rockPaperScissorsGame(playerFirst, playerTwo){
    let result = "Invalid input, enter correct value."
    if((playerFirst === "Rock" || playerFirst === "Paper" || playerFirst === "Scissors") && 
    (playerTwo === "Rock" || playerTwo === "Paper" || playerTwo === "Scissors") && 
    (playerFirst === playerTwo)){result = "Draw! Enter new values."} 
    if(playerFirst === "Rock" && playerTwo === "Paper"){result = "2nd player wins!"}     
    if(playerFirst === "Rock" && playerTwo === "Scissors"){result = "1nd player wins!"} 
    if(playerFirst === "Paper" && playerTwo === "Rock"){result = "1nd player wins!"} 
    if(playerFirst === "Paper" && playerTwo === "Scissors"){result = "2nd player wins!"} 
    if(playerFirst === "Scissors" && playerTwo === "Rock"){result = "2nd player wins!"} 
    if(playerFirst === "Scissors" && playerTwo === "Paper"){result = "1nd player wins!"} 
    return result
}


console.log(rockPaperScissorsGame("Paper", "Paper"))     // Enter new values
console.log(rockPaperScissorsGame("Rock", "Paper"))      // 2nd player wins!
console.log(rockPaperScissorsGame("Rock", "Scissors"))   // 1nd player wins!
console.log(rockPaperScissorsGame("Paper", "Rock"))      // 1nd player wins!
console.log(rockPaperScissorsGame("Paper", "Scissors"))  // 2nd player wins!
console.log(rockPaperScissorsGame("Scissors", "Rock"))   // 2nd player wins!
console.log(rockPaperScissorsGame("Scissors", "Paper"))  // 1nd player wins!
console.log(rockPaperScissorsGame("a", "Paper"))         // Invalid input