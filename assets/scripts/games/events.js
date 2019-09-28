'use strict'
const getformFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

// const onCreateGame = function (event) {
//   event.preventDefault()
//   //const form = event.target
//   //const formData = getFormFields(form)
//   api.createGame(formData)
//   .then(ui.onCreateGameSuccess)
//   .catch(ui.onCreateGameFailure)
// }

const cells = ["","","","","","","","",""]

let player = 'X'
$('.box').on('click', function (event){
  const box = $(event.target).text()
  //preventing the player from clicking on the same square more than once
  if ($(event.target).text() === '')
  if (player === 'X') {
    $(event.target).text(player)
    player = 'O'
  }else if (player === 'O') {
//$(event.target).text('This square is already occuppied')
    $(event.target).text(player)
    player = 'X'
  }
})

// module.exports = {
//   onCreateGame
// }
