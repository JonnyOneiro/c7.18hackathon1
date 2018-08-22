$(document).ready(initializeGame);

var player1 = 0;
var player2 = 1;
var currentPlayer = null;
var winStreak = 3;
var boardSize = 3; // dynamic win requirements: 3,4,5







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



function checkForWin(row, column, value) {
  checkRowWin(row, column, value);
  checkColumnWin(row, column, value);
  checkPosDiagonalWin(row, column, value);
  checkNegDiagonalWin(row, column, value);
}

function checkRowWin (row, column, value) {
    var winCount;
    var comparedColumn = column + 1;
    if (value === boardArray[comparedColumn][column].val()) {
        winCount++;
        comparedColumn++;
    } else {
        var comparedColumn = row - 1;
        if (value === boardArray[row][comparedColumn].val()) {
            winCount++;
            comparedColumn--;
        }
    }    
    if (winCount === winStreak) {
        announceWinner();
    } 
}

function checkColumnWin (row, column, value) {
    var winCount;
    var comparedRow = row + 1;
    if (value === boardArray[comparedRow][column].val()) {
        winCount++;
        comparedRow++;
    } else {
        var comparedRow = row - 1;
        if (value === boardArray[comparedRow][column].val()) {
            winCount++;
            comparedRow--;
        }
    }    
    if (winCount === winStreak) {
        announceWinner();
    } 
}

function checkPosDiagonalWin (row, column, value) {
    var winCount;
    var comparedRow = row - 1;
    var comparedColumn = column + 1;
    if (value === boardArray[comparedRow][comparedColumn].val()) {
        winCount++;
        comparedRow--;
        comparedColumn++;
    } else {
        var comparedRow = row + 1;
        var comparedColumn = column - 1;
        if (value === boardArray[comparedRow][column].val()) {
            winCount++;
            comparedRow++;
            comparedColumn--;
        }
    }
    if (winCount === winStreak) {
        announceWinner();
    } 
}

function checkNegDiagonalWin (row, column, value) {
    var winCount;
    var comparedRow = row + 1;
    var comparedColumn = column +1;
    if (value === boardArray[comparedRow][comparedColumn].val()) {
        winCount++;
        comparedRow++;
        comparedColumn++;
    } else {
        var comparedRow = row - 1;
        var comparedColumn = column -1;
        if (value === boardArray[comparedRow][column].val()) {
            winCount++;
            comparedRow--;
            comparedColumn--;
        }
    }
    if (winCount === winStreak) {
        announceWinner();
    } 
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
