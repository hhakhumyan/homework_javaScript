/*
A binary clock displays the time of day in binary format. Modern binary clocks have six columns of lights; 
two for each of the hours, minutes and seconds. The photo below shows a binary clock displaying the time "12:15:45":
The binary values increase from the bottom to the top row. Lights on the bottom row have a value of 1, 
lights on the row above have a value of 2, then 4 on the row above that, and finally a value of 8 on the top row. 
Any 24-hour time can be shown by switching on a certain combination of lights. For example, to show the time "10:37:49":
You've decided to build your own binary clock, and you need to figure out how to light each row of the clock to show the correct time. 
Given the time as a string, return an array containing strings that shows the lights for each row of the clock (top to bottom). 
Use "1" for on, and "0" for off. Leave a blank space for any part of the row that doesn't require a light.
*/

function binaryClock(time){
    let hourFirstNumber = +time[0]
    let hourSecondNumber = +time[1]
    let minuteFirstNumber = +time[3]
    let minuteSecondNumber = +time[4]
    let secondFirstNumber = +time[6]
    let secondSecondNumber = +time[7]

    let matArr = [
        [ [8],   ['*'], [   ],   ['*'], [   ],   ['*'], [   ] ],
        [ [4],   ['*'], [   ],   [   ], [   ],   [   ], [   ] ],
        [ [2],   [   ], [   ],   [   ], [   ],   [   ], [   ] ],
        [ [1],   [   ], [   ],   [   ], [   ],   [   ], [   ] ]
    ]

    for(let i = 0; i < matArr.length; i++){       
        if(secondSecondNumber >= matArr[i][0][0] && matArr[i][6].length === 0){
            secondSecondNumber = secondSecondNumber - matArr[i][0][0]; matArr[i][6].push(1)} else {if(!matArr[i][6][0]) matArr[i][6].push(0)}
    }
    for(let i = 0; i < matArr.length; i++){       
        if(secondFirstNumber >= matArr[i][0][0] && matArr[i][5].length === 0){
            secondFirstNumber = secondFirstNumber - matArr[i][0][0]; matArr[i][5].push(1)} else {if(!matArr[i][5][0]) matArr[i][5].push(0)}
    }    
    for(let i = 0; i < matArr.length; i++){       
        if(minuteSecondNumber >= matArr[i][0][0] && matArr[i][4].length === 0){
            minuteSecondNumber = minuteSecondNumber - matArr[i][0][0]; matArr[i][4].push(1)} else {if(!matArr[i][4][0]) matArr[i][4].push(0)}
    }    
    for(let i = 0; i < matArr.length; i++){       
        if(minuteFirstNumber >= matArr[i][0][0] && matArr[i][3].length === 0){
            minuteFirstNumber = minuteFirstNumber - matArr[i][0][0]; matArr[i][3].push(1)} else {if(!matArr[i][3][0]) matArr[i][3].push(0)}
    }
    for(let i = 0; i < matArr.length; i++){       
        if(hourSecondNumber >= matArr[i][0][0] && matArr[i][2].length === 0){
            hourSecondNumber = hourSecondNumber - matArr[i][0][0]; matArr[i][2].push(1)} else {if(!matArr[i][2][0]) matArr[i][2].push(0)}
    }
    for(let i = 0; i < matArr.length; i++){       
        if(hourFirstNumber >= matArr[i][0][0] && matArr[i][1].length === 0){
            hourFirstNumber = hourFirstNumber - matArr[i][0][0]; matArr[i][1].push(1)} else {if(!matArr[i][1][0]) matArr[i][1].push(0)}
    }  

    let result = []
    
    for(let i = 0; i < matArr.length; i++){
        let sum = ''
        for(let j = 1; j < matArr[i].length; j++){
            if(matArr[i][j][0] !== "*"){sum += matArr[i][j][0]}
        }
        result.push(sum)
    }
    return console.log(result)
}

binaryClock("10:37:49") // [" 0 0 1", " 00110", "001100", "101101"]
binaryClock("18:57:31") // [" 1 0 0", " 01100", "000110", "101111"]
binaryClock("10:50:22") // [" 0 0 0", " 01000", "000011", "101000"]