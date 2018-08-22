$(document).ready(initializeGame);

var player1 = 0;
var player2 = 1;
var currentPlayer = null;
var winStreak = 3;
var boardSize = 3; // dynamic win requirements: 3,4,5


var scoreCounter = 0;
var scoreTitle = $('<h3>').text('Score Board: ');
var selectedRow = null;
var selectedColumn = null;
var selectedValue = null;






function initializeGame () {
    makeArray(3);
    createGameboard(virtualBoard);
    $('.square').on('click', clickHandler);

    startingPlayer();
    $('.square').on('click', playersTurn);

    


    $('.scoreboard').append(scoreTitle);
    $('h3').append(scoreCounter);
    


}


function createGameboard (gameBoardArray) {
    for(var row=0; row<gameBoardArray.length; row++){
        for(column=0; column<gameBoardArray.length; column++){
            var newDiv = $('<div>');
            newDiv.addClass('square')
            newDiv.attr('row', row);
            newDiv.attr('column', column)
            $('.gameboard').append(newDiv);
        }
    }
    $('.square').css('height', 95/gameBoardArray.length+'%');
    $('.square').css('width', 95/gameBoardArray.length+'%');
}



function keepScore () {
    console.log('keepScore called');
 
    $('.scoreboard').append(scoreTitle);
    $('h3').text('Score Board: ' + scoreCounter);

}



function playersTurn () {
    // CheckForWin();
    if(currentPlayer === player1){
        newPtag = $('<p>')
        $(this).append(newPtag);
        $(newPtag).text('X');
        selectedRow = $(this).attr('row');
        selectedColumn = $(this).attr('column');
        console.log('selected row:', selectedRow);
        console.log('selected column:', selectedColumn);
        selectedValue =$(this).text();
        $(this).off('click', playersTurn);
        virtualBoard[selectedRow][selectedColumn] = selectedValue;
        console.log(virtualBoard);
        currentPlayer = player2;
    }else{
        newPtag = $('<p>')
        $(this).append(newPtag);
        $(newPtag).text('O');
        selectedRow = $(this).attr('row');
        selectedColumn = $(this).attr('column');
        console.log('selected row:', selectedRow);
        console.log('selected column:', selectedColumn);
        console.log('selected value:', selectedValue);
        selectedValue =$(this).text();
        $(this).off('click', playersTurn);
        virtualBoard[selectedRow][selectedColumn] = selectedValue;
        console.log(virtualBoard);
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

    scoreCounter++;
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
        for (var newSubArray = 0; newSubArray <= (boardSize-1); newSubArray++) {
            var actualBoard = new Array(boardSize).fill('');
            virtualBoard.push(actualBoard);
        }
}