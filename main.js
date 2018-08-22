$(document).ready(initializeGame);

var player1 = 0;
var player2 = 1;
var currentPlayer = null;
var winStreak = null; // dynamic win requirements: 3,4,5







function initializeGame () {
    makeArray(3);
    createGameboard(virtualBoard);
    $('.square').on('click', clickHandler);

    startingPlayer();
    $('.square').on('click', playersTurn);

    

}


function createGameboard (gameBoardArray) {
    for(i=0; i<gameBoardArray.length; i++){
        var column = i;
        for(k=0; k<gameBoardArray.length; k++){
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


function makeArray(boardSize){
    virtualBoard = new Array();
        for (var x = 0; x <= (boardSize-2); x++) {
            virtualBoard[x] = new Array(boardSize).fill('');
            virtualBoard.push(virtualBoard[x]);
        }
}