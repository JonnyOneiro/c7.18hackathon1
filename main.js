$(document).ready(initializeGame);

var player1 = 0;
var player2 = 1;
var currentPlayer = null;
var winStreak = 3; //create bigger board should re-assign these values; make dynamic
var boardSize = 3; //create bigger board should re-assign these values; make dynamic


var scoreCounter = 0;
var scoreTitle = $('<h3>').text('Score Board: ');
var selectedRow = null;
var selectedColumn = null;
var selectedValue = null;

var winCount = 1;
var checkWin = true;

var resetButton = $('<button>').addClass('restart').text('Reset Game');

var changeGameSize = $('<div>').text('Choose Board Size');
var fivebyfive = $('<button>').text('5x5').addClass('five');
var fourbyfour = $('<button>').text('4x4').addClass('four');
var threebythree = $('<button>').text('3x3').addClass('three');
changeGameSize.append(fivebyfive);
changeGameSize.append(fourbyfour);
changeGameSize.append(threebythree);
$(fivebyfive).on('click', function(){
    $('.gameboard').empty();
<<<<<<< HEAD
   makeArray(5);
   createGameboard(virtualBoard);
   $('.square').on('click', playersTurn);
=======
    makeArray(5);
    createGameboard(virtualBoard);
>>>>>>> fbc12ba81c6e4e4816612903404965b0551ecbd6
})
$(fourbyfour).on('click', function(){
    $('.gameboard').empty();
    makeArray(4);
    createGameboard(virtualBoard);
    $('.square').on('click', playersTurn);
});
$(threebythree).on('click', function(){
    $('.gameboard').empty();
    makeArray(3);
    createGameboard(virtualBoard);
    $('.square').on('click', playersTurn);
});




function initializeGame () {
    makeArray(3);
    
    createGameboard(virtualBoard);
    $('.square').on('click', clickHandler);

    startingPlayer();
    $('.square').on('click', playersTurn);

    $('.scoreboard').append(scoreTitle);
    $('h3').append(scoreCounter);

    $('.container').append(resetButton);

    $('.restart').on('click', resetGame);
    
    $('.scoreboard').append(changeGameSize);


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
    
    if(currentPlayer === player1){
        newPtag = $('<p>')
        $(this).append(newPtag);
        $(newPtag).text('X');
        selectedRow = parseInt($(this).attr('row'));
        selectedColumn = parseInt($(this).attr('column'));
        console.log('selected row:', selectedRow);
        console.log('selected column:', selectedColumn);
        selectedValue =$(this).text();
        $(this).off('click', playersTurn);
        virtualBoard[selectedRow][selectedColumn] = selectedValue;
        console.log(virtualBoard);
        currentPlayer = player2;
        checkForWin(selectedRow,selectedColumn,selectedValue);
    }else{
        newPtag = $('<p>')
        $(this).append(newPtag);
        $(newPtag).text('O');
        selectedRow = parseInt($(this).attr('row'));
        selectedColumn = parseInt($(this).attr('column'));
        console.log('selected row:', selectedRow);
        console.log('selected column:', selectedColumn);
        console.log('selected value:', selectedValue);
        selectedValue =$(this).text();
        $(this).off('click', playersTurn);
        virtualBoard[selectedRow][selectedColumn] = selectedValue;
        console.log(virtualBoard);
        currentPlayer = player1;
        checkForWin(selectedRow,selectedColumn,selectedValue);
    }
    
}

function checkForWin(selectedRow,selectedColumn,selectedValue) {
  checkRowWin(selectedRow,selectedColumn,selectedValue);
  checkColumnWin(selectedRow,selectedColumn,selectedValue);
  checkPosDiagonalWin(selectedRow,selectedColumn,selectedValue);
  checkNegDiagonalWin(selectedRow,selectedColumn,selectedValue);
}

function checkRowWin (selectedRow, selectedColumn, selectedValue) {
    if (checkWin) {
        var comparedColumn = selectedColumn + 1;
        for ( ; comparedColumn < virtualBoard.length; comparedColumn++) {
            if (selectedValue === virtualBoard[selectedRow][comparedColumn]) {
                winCount++;
            }
        } 
        var comparedColumn = selectedColumn - 1;
        for ( ; comparedColumn >= 0; comparedColumn--) {
            if (selectedValue === virtualBoard[selectedRow][comparedColumn]) {
                winCount++;
            }
        }
        console.log('win count is: ', winCount);
        if (winCount === winStreak) {
            announceWinner();
            return;
        }
        winCount = 1;
    }
}

function checkColumnWin(selectedRow, selectedColumn, selectedValue) {
    if (checkWin) {
        var comparedRow = selectedRow + 1;
        for ( ;comparedRow < virtualBoard.length; comparedRow++) {
            if (selectedValue === virtualBoard[comparedRow][selectedColumn]) {
                winCount++;
            }
        }
        var comparedRow = selectedRow - 1;
        for ( ;comparedRow >= 0; comparedRow--) {
            if (selectedValue === virtualBoard[comparedRow][selectedColumn]) {
                winCount++;
            }
        }
        if (winCount === winStreak) {
            announceWinner();
            return;
        }
        winCount = 1;
    }
}

function checkPosDiagonalWin(selectedRow, selectedColumn, selectedValue) {
    if (checkWin) {
        var comparedRow = selectedRow - 1;
        var comparedColumn = selectedColumn + 1;
        for ( ;comparedColumn < virtualBoard.length && comparedRow >= 0; comparedColumn++, comparedRow--) {
            if (selectedValue === virtualBoard[comparedRow][comparedColumn]) {
                winCount++;
            }
        } 
        var comparedRow = selectedRow + 1;
        var comparedColumn = selectedColumn - 1;
        for ( ; comparedRow < virtualBoard.length && comparedColumn >= 0; comparedRow++, comparedColumn--) {
            if (selectedValue === virtualBoard[comparedRow][comparedColumn]) {
                winCount++;
            }
        }
        if (winCount === winStreak) {
            announceWinner();
            return;
        }
        winCount = 1;
    }
}

function checkNegDiagonalWin(selectedRow, selectedColumn, selectedValue) {
    if (checkWin) {
        var comparedRow = selectedRow + 1;
        var comparedColumn = selectedColumn + 1;
        for ( ;comparedColumn < virtualBoard.length && comparedRow < virtualBoard.length; comparedRow++, comparedColumn++) {
            if (selectedValue === virtualBoard[comparedRow][comparedColumn]) {
                winCount++;
            }
        } 
        var comparedRow = selectedRow - 1;
        var comparedColumn = selectedColumn - 1;
        for ( ;comparedColumn >= 0 && comparedRow >= 0;  comparedRow--, comparedColumn--) {
            if (selectedValue === virtualBoard[comparedRow][comparedColumn]) {
                winCount++;
            }
        }
        if (winCount === winStreak) {
            announceWinner();
            return;
        }
        winCount = 1;
    }
}

function announceWinner() {
    checkWin = false;
    console.log("you win!");
}

function resetGame () {
    $('.gameboard').empty();
    checkWin = true;
    scoreCounter++;

    player1 = 0;
    player2 = 1;
    currentPlayer = null;

    scoreCounter = 0;
    scoreTitle = $('<h3>').text('Score Board: ');
    selectedRow = null;
    selectedColumn = null;
    selectedValue = null;

    winCount = 1;
    checkWin = true;

    makeArray(3);
    createGameboard(virtualBoard);
    $('.square').on('click', clickHandler);

    startingPlayer();
    $('.square').on('click', playersTurn);

    $('.restart').on('click', resetGame);
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
    console.log('makeArray was run');
    virtualBoard = new Array();
        for (var newSubArray = 0; newSubArray <= (boardSize-1); newSubArray++) {
            var actualBoard = new Array(boardSize).fill('');
            virtualBoard.push(actualBoard);
        }
}