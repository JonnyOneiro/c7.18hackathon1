$(document).ready(initializeGame);

var player1 = 0;
var player2 = 1;
var currentPlayer = null;
var winStreak = null; // dynamic win requirements: 3,4,5







function initializeGame () {
    createGameboard(3);
    startingPlayer();
    $('.square').on('click', playersTurn);
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
    // CheckForWin();
    if(currentPlayer === player1){
        newPtag = $('<p>')
        $(this).append(newPtag);
        $(newPtag).text('X');
        $(this).off('click')
        currentPlayer = player2;
    }else{
        newPtag = $('<p>')
        $(this).append(newPtag);
        $(newPtag).text('O');
        $(this).off('click')
        currentPlayer = player1;
    }
}



function CheckForWin(boxClicked) {

  checkRowWin(boxClicked)
  checkColumnWin(boxClicked)
  checkPosDiagnalWin(boxClicked)
  checkNegDiagnalWin(boxClicked)
  

}

function checkRowWin () {
}
function checkColumnWin () {
}
function checkPosDiagnalWin () {
}
function checkNegDiagnalWin () {
}



function resetGame () {



}


function startingPlayer(){
    currentPlayer = player1;
    console.log('starting player');
}
