$(document).ready(initializeGame);

var player1 = 0;
var player2 = 1;
var currentPlayer = null;
var winStreak = null; // dynamic win requirements: 3,4,5







function initializeGame () {
    createGameboard(3);
    $('.square').on('click', clickHandler);

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



function CheckForWin(position, token) {

    var virtualBoard = new Array(boardSize);
        for (var x = 0; x < boardSize; x++) {
            virtualBoard[x] = new Array(boardSize).fill('');;
        }

    var position; // = virtualboard[c][r]    
     
    

  checkRowWin(position, token)
  checkColumnWin(position, token)
  checkPosDiagnalWin(position, token)
  checkNegDiagnalWin(position, token)
  

}



function checkRowWin (position, token) {
}
function checkColumnWin () {
}
function checkPosDiagnalWin () {
}
function checkNegDiagnalWin () {
}




function resetGame () {


}


function clickHandler() {

    var columnVal = $(this).attr('column');
    var rowVal = $(this).attr('row');
    console.log('the row value is: ', rowVal);
    console.log('the column value is: ', columnVal);

    var sqTextVal = $('.square').text();
    console.log('the text is: ', sqTextVal);
}


function startingPlayer(){
    currentPlayer = player1;
    console.log('starting player');

}
