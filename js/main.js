//GLOBAL VARIABLES
var painted
var content
var winningCombinations
var turn = 0
var theCanvas
var c
var cxt
var sqauresFilled = 0
var w
var y

//ARRAYS
window.onload = function(){

    //creates the playing ground
    painted = new Array()
    content = new Array()

    //conditions for winning
    winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    //checks to see if the canvas is filled or not
    for(var l = 0; l <= 8; l++){
        painted[l] = false
        content[l] = ''
    }

}

//GAME METHOD
function canvasClicked(canvasNumber){
    theCanvas = "canvas"+canvasNumber
    c = document.getElementById(theCanvas)
    cxt = c.getContext("2d") //gives us the context of canvas, 2d is used to draw x and y coordinates

    if(painted[canvasNumber-1] ==false){ //condition tells us if the canvas is occupied or not
        if(turn%2==0){ // % or modulus operator gives us the reminder of two values. turn value is an condition to determine whoes' turn is it. increments by 1 everyturn is taken
            cxt.beginPath() //beginning of the drawing path
            cxt.moveTo(70,20) //moves the path point to this location to draw
            cxt.lineTo(250,125) //draws line from 70,20 to 250,125
            cxt.moveTo(250,20) //moves the imaginary cursor to this point now
            cxt.lineTo(70,125) //draws line from 250,20 to 70,125
            cxt.strokeStyle = "yellow" //color of strokes
            cxt.lineWidth = 10 //thickness
            cxt.stroke() //actual command that draws the lines
            cxt.closePath() //ends the drawing sequence
            content[canvasNumber-1] = 'X' //gives the array value of 'X'
            //this whole block of code draws X
        }

        else {//condition for drawing O
            cxt.beginPath()//like above starts the imaginary cursor
            cxt.arc(150, 75, 70, 0, Math.PI*2, true)//uses arc method to draw a circle, first three values are x, y, and radius. x and y is the center of the circle
            cxt.strokeStyle = "white"
            cxt.lineWidth = 10
            cxt.stroke()//execution 
            cxt.closePath()
            content[canvasNumber-1] = 'O'
        }

        turn++//each time turn is incremented by 1 so it would be the next players turn
        painted[canvasNumber-1] = true //canvas has been filled with X or O
        sqauresFilled++//number of canvasses filled gone up
        checkForWinners(content[canvasNumber-1]) // function that contains the content of the current canvas so it determines who goes next

        if(sqauresFilled==9){ ///checks to see if there are any open canvases
            alert("THE GAME IS OVER!")//if notthen game is over
            location.reload(true)
        }

    }
    else {
        alert("THAT SPACE IS ALREADY OCCUPIED!!")
    }

}

function checkForWinners(symbol){//executes after every symbol is draw

    for(var a = 0; a < winningCombinations.length; a++){ //loops through all the winningConditions
        if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==symbol&&content[winningCombinations[a][2]]==symbol){//if symbols and conditions matches
            alert(symbol+ " WON!")//willl alert winner
            playAgain() 
        }

    }

}

function playAgain(){
    y=confirm("PLAY AGAIN?") //confirms pops a window with OK and CANCEL
    if(y==true){
        alert("OKAY! ^^/>")
        location.reload(true) //reload
    }
    else {
        alert("SO LONG, SUCKER!!")
    }
    
}
