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

var winCount = 0;

var changeGameSize = $('<div>').text('Choose Board Size');
var fivebyfive = $('<button>').text('5x5').addClass('five');
var fourbyfour = $('<button>').text('4x4').addClass('four');
var threebythree = $('<button>').text('3x3').addClass('three');
changeGameSize.append(fivebyfive);
changeGameSize.append(fourbyfour);
changeGameSize.append(threebythree);
$(fivebyfive).on('click', function(){
    $('.gameboard').empty();
   makeArray(5);
   createGameboard(virtualBoard);
})
$(fourbyfour).on('click', function(){
    $('.gameboard').empty();
    makeArray(4);
    createGameboard(virtualBoard);
});
$(threebythree).on('click', function(){
    $('.gameboard').empty();
    makeArray(3);
    createGameboard(virtualBoard);
});




function initializeGame () {
    makeArray(3);
    
    createGameboard(virtualBoard);
    $('.square').on('click', clickHandler);

    startingPlayer();
    $('.square').on('click', playersTurn);

    


    $('.scoreboard').append(scoreTitle);
    $('h3').append(scoreCounter);
    
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

function checkRowWin(selectedRow, selectedColumn, selectedValue) {
    
    var comparedColumn = selectedColumn + 1;
    if (comparedColumn < virtualBoard.length - 1) {
        if (selectedValue === virtualBoard[selectedRow][comparedColumn]) {
            winCount+=1;
            comparedColumn++;
        }
    } else {
        var comparedColumn = selectedRow - 1;
        if (comparedColumn >= 0) {
            if (selectedValue === virtualBoard[selectedRow][comparedColumn]) {
                winCount+=1;
                comparedColumn--;
            }
        }
    }
    console.log('win count is: ', winCount);
    if (winCount === winStreak) {
        announceWinner();
    }
    // winCount = 0;
}

function checkColumnWin(selectedRow, selectedColumn, selectedValue) {
    var comparedRow = selectedRow + 1;

    if (comparedRow < virtualBoard.length) {
        if (selectedValue === virtualBoard[comparedRow][selectedColumn]) {
            winCount+=1;
            comparedRow++;
        }
    } else {
        var comparedRow = selectedRow - 1;
        if (comparedRow >= 0) {
            if (selectedValue === virtualBoard[comparedRow][selectedColumn]) {
                winCount+=1;
                comparedRow--;
            }
        }
    }
    if (winCount === winStreak) {
        announceWinner();
    }
    // winCount = 0;
}
function checkPosDiagonalWin(selectedRow, selectedColumn, selectedValue) {
    var comparedRow = selectedRow - 1;
    var comparedColumn = selectedColumn + 1;
    if (comparedColumn < virtualBoard.length && comparedRow >= 0) {
        if (selectedValue === virtualBoard[comparedRow][comparedColumn]) {
            winCount+=1;
            comparedRow--;
            comparedColumn++;
        }
    } else {
        var comparedRow = selectedRow + 1;
        var comparedColumn = selectedColumn - 1;
        if (comparedRow < virtualBoard.length && comparedColumn >= 0) {
            if (selectedValue === virtualBoard[comparedRow][comparedColumn]) {
                winCount+=1;
                comparedRow++;
                comparedColumn--;
            }
        }
    }
    if (winCount === winStreak) {
        announceWinner();
    }
    // winCount = 0;
}

function checkNegDiagonalWin(selectedRow, selectedColumn, selectedValue) {
    var comparedRow = selectedRow + 1;
    var comparedColumn = selectedColumn + 1;
    if (comparedColumn < virtualBoard.length && comparedRow < virtualBoard.length) {
        if (selectedValue === virtualBoard[comparedRow][comparedColumn]) {
            winCount+=1;
            comparedRow++;
            comparedColumn++;
        }
    } else {
        var comparedRow = selectedRow - 1;
        var comparedColumn = selectedColumn - 1;
        if (comparedColumn >= 0 && comparedRow >= 0) {
            if (selectedValue === virtualBoard[comparedRow][comparedColumn]) {
                winCount+=1;
                comparedRow--;
                comparedColumn--;
            }
        }
    }
    if (winCount === winStreak) {
        announceWinner();
    }
    // winCount = 0;
}

function announceWinner() {
    console.log("you win!");
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
    console.log('makeArray was run');
    virtualBoard = new Array();
        for (var newSubArray = 0; newSubArray <= (boardSize-1); newSubArray++) {
            var actualBoard = new Array(boardSize).fill('');
            virtualBoard.push(actualBoard);
        }
}

function changeGameBoard(){

}