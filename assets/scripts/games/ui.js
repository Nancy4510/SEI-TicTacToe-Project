'use strict'

const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onGetGameSuccess = function (data) {
  // console.log('In onGetGameSuccess')
  // console.log(data.games.length)
  successMessage('Get games success')
  $('#gameMessage').html("You've played " + data.games.length + " games! Wow!")
}

const onGetGameFailure = function () {
  // console.log('In onGetGameFailure')
  successMessage('Get games failed!')
}

const onCreateGameSuccess = function (data) {
  store.game = data.game
  // console.log(store)
  successMessage('Created game successfully!')
}

const onCreateGameFailure = function (data) {
  store.game = data.game
  // console.log(store)
  failureMessage('Created game failed')
}

const onUpdateGameSuccess = function (responseData) {
  store.game = responseData.game
  // console.log(store)
  successMessage('Updated game successfully!')
}

const onUpdateGameFailure = function (responseData) {
  store.game = responseData.game
  failureMessage('Update game failed')
}

module.exports = {
  onGetGameSuccess,
  onGetGameFailure,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
