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

const onCreateGameSuccess = function () {
  successMessage('Created example successfully!')
}

const onCreateGameFailure = function () {
  failureMessage('Creating example failed')
}

 

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure
}
