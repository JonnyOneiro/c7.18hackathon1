$(document).ready(initializeGame);

var player1;
var player2;
var winStreak = null; // dynamic win requirements: 3,4,5







function initializeGame () {
    createGameboard(3);


}



function createGameboard (boardSize) {
    for(i=0; i<boardSize; i++){
        var column = i;
        for(k=0; k<boardSize; k++){
            var row = k;
            var newDiv = $('<div>');
            newDiv.addClass('square')
            newDiv.attr('row', column)
            newDiv.attr('column', row);
            $('.gameboard').append(newDiv);
        }
    }
}



function keepScore () {



}



function playersTurn () {



}



function CheckForWin(boxClicked) {

  checkRowWin(boxClicked)
  checkColumnWin(boxClicked)
  checkPosDiagnalWin(boxClicked)
  checkNegDiagnalWin(boxClicked)
  

}

function checkRowWin () {
  if (selectedBox === 
}
function checkColumnWin () {
}
function checkPosDiagnalWin () {
}
function checkNegDiagnalWin () {
}



function resetGame () {



}

