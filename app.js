console.log("Loading game ....")
var currentPlayer = true ;
function chooseCell(event){
console.log(event.target.id)     
var squar = document.getElementById(event.target.id)
var x = document.createTextNode("X");
var o = document.createTextNode("O");
currentPlayer()
}

//Horizantal 
//[0,1,2] , [3,4,5] , [6,7,8] 
//Vertical 
//[0,3,6] , [1,4,7] , [2,5,8] 
//Diagonal 
//[0,4,8] , [2,4,6]

var currentPlayer = document.getElementById("currentPlayer");
function changeCurrentPlayer() {
    if (currentPlayer.textContent === "X") {
      currentPlayer.textContent = "O";
    } else {
      currentPlayer.textContent = "X";
    }
  }

  