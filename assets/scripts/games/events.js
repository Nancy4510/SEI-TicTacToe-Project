'use strict'
const getformFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onGetGames = function () {
  console.log("In onGetGames")
  event.preventDefault()
  api.getGame()
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFailure)
}

const onCreateGame = function (data) {
  event.preventDefault()
  api.createGame(data)
  .then(ui.onCreateGameSuccess)
  .catch(ui.onCreateGameFailure)
}

const onUpdateGame = function (responseData) {
  console.log("In onUpdateGame")
  event.preventDefault()
  api.updateGame(responseData)
  .then(ui.onUpdateGameSuccess)
  .catch(ui.onUpdateGameFailure)
}

const cells = ["","","","","","","","",""]

let player = 'X'
$('.box').on('click', function (event)
{
  const onClick = $(event.target).text()
  //preventing the player from clicking on a square that's already occupied
  if ($(event.target).text() === '')
{
  if (player === 'X')
  {
    $(event.target).text(player)
    player = 'O'
    $( "#gameMessage" ).html( "<p>It's O's turn to move now!</p>")
  }
  else if(player === 'O')
  {
    $(event.target).text(player)
    player = 'X'
    $( "#gameMessage" ).html( "<p>It's X's turn to move now!</p>")
  }
}
else
{
  $("#gameMessage" ).html( "<p>This square is already occupied! Please choose another one.</p>")
}
///////////CHECKING TO SEE IF PLAYER X WON///////////////////
//checking to see if the squares are equal to determine a win
//reading what's in the class `square1, `sqaure2`, `square3` and seeing if they're all equal to X
if ($('#square1').html() === 'X' && $('#square2').html() === 'X' && $('#square3').html() === 'X'){
  //displaying the message that Player X has won.
  $( "#gameMessage" ).html( "<p>Player X Won! Congrats!</p>")
  //turns off the click, preventing the user from clicking after winning
  $('.box').off('click')
}else if ($('#square4').html() === 'X' && $('#square5').html() === 'X' && $('#square6').html() === 'X'){
  $( "#gameMessage" ).html( "<p>Player X Won! Congrats!</p>")
  $('.box').off('click')
}
else if ($('#square7').html() === 'X' && $('#square8').html() === 'X' && $('#square9').html() === 'X'){
  $( "#gameMessage" ).html( "<p>Player X Won! Congrats!</p>")
  $('.box').off('click')
}else if ($('#square1').html() === 'X' && $('#square4').html() === 'X' && $('#square7').html() === 'X'){
  $( "#gameMessage" ).html( "<p>Player X Won! Congrats!</p>")
  $('.box').off('click')
} else if ($('#square2').html() === 'X' && $('#square5').html() === 'X' && $('#square8').html() === 'X'){
  $( "#gameMessage" ).html( "<p>Player X Won! Congrats!</p>")
  $('.box').off('click')
} else if ($('#square3').html() === 'X' && $('#square6').html() === 'X' && $('#square9').html() === 'X'){
  $( "#gameMessage" ).html( "<p>Player X Won! Congrats!</p>")
  $('.box').off('click')
}else if ($('#square1').html() === 'X' && $('#square5').html() === 'X' && $('#square9').html() === 'X'){
  $( "#gameMessage" ).html( "<p>Player X Won! Congrats!</p>")
  $('.box').off('click')
}
else if ($('#square3').html() === 'X' && $('#square5').html() === 'X' && $('#square7').html() === 'X'){
  $( "#gameMessage" ).html( "<p>Player X Won! Congrats!</p>")
  $('.box').off('click')
}

///////////CHECKING TO SEE IF PLAYER O WON///////////////////
if ($('#square1').html() === 'O' && $('#square2').html() === 'O' && $('#square3').html() === 'O'){
  $( "#gameMessage" ).html("<p>Player O Won! Congrats!</p>")
  //turns off the click, preventing the user from clicking after winning
  $('.box').off('click')
}else if ($('#square4').html() === 'O' && $('#square5').html() === 'O' && $('#square6').html() === 'O'){
  $( "#gameMessage" ).html("<p>Player O Won! Congrats!</p>")
  $('.box').off('click')
}
else if ($('#square7').html() === 'O' && $('#square8').html() === 'O' && $('#square9').html() === 'O'){
  $( "#gameMessage" ).html("<p>Player O Won! Congrats!</p>")
  $('.box').off('click')
}else if ($('#square1').html() === 'O' && $('#square4').html() === 'O' && $('#square7').html() === 'O'){
  $( "#gameMessage" ).html("<p>Player O Won! Congrats!</p>")
  $('.box').off('click')
} else if ($('#square2').html() === 'O' && $('#square5').html() === 'O' && $('#square8').html() === 'O'){
  $( "#gameMessage" ).html("<p>Player O Won! Congrats!</p>")
  $('.box').off('click')
} else if ($('#square3').html() === 'O' && $('#square6').html() === 'O' && $('#square9').html() === 'O'){
  $( "#gameMessage" ).html("<p>Player O Won! Congrats!</p>")
  $('.box').off('click')
}else if ($('#square1').html() === 'O' && $('#square5').html() === 'O' && $('#square9').html() === 'O'){
  $( "#gameMessage" ).html("<p>Player O Won! Congrats!</p>")
  $('.box').off('click')
}else if ($('#square3').html() === 'O' && $('#square5').html() === 'O' && $('#square7').html() === 'O'){
  $( "#gameMessage" ).html("<p>Player O Won! Congrats!</p>")
  $('.box').off('click')
  
// }else if (){
//   $( "#gameMessage" ).append("<p>It's a tie!</p>")
// }
}
})

module.exports = {
  onGetGames,
  onCreateGame,
  onUpdateGame
}
