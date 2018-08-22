$(document).ready(initializeGame);

var player1;
var player2;
var winStreak = null; // dynamic win requirements: 3,4,5







function initializeGame () {
    createGameboard(3);
    $('.square').on('click', clickHandler);


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

// function checkRowWin () {
//   if (selectedBox === 
// }
// function checkColumnWin () {
// }
// function checkPosDiagnalWin () {
// }
// function checkNegDiagnalWin () {
// }



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
