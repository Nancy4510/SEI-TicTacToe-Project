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

const onGetGameSuccess = function () {
  console.log(response)
  successMessage('Get games successfully!')
}

const onGetGameFailure = function () {
  console.log(response)
  successMessage('Get games failed!')
}

const onCreateGameSuccess = function (data) {
  store.game = data.game
  console.log(store)
  successMessage('Created game successfully!')
}

const onCreateGameFailure = function (data) {
  store.game = data.game
  console.log(store)
  failureMessage('Created game failed')
}

const onUpdateGameSuccess = function (responseData) {
  store.game = responseData.game
  console.log(store)
  successMessage('Updated game successfully!')
}

const onUpdateGameFailure = function (responsData) {
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
