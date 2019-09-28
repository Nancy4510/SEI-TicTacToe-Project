'use strict'

const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('You signed up successfully! Now you can sign in to play!')
  $('.signUp').hide()
}

const onSignUpFailure = function () {
  failureMessage('Sorry, sign up failed. Please try again.')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  store.user=responseData.user
  $('.signIn').hide()
}

const onSignInFailure = function () {
  failureMessage('sign in failed')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  $('.changePassword').hide()
}

const onChangePasswordFailure = function () {
  failureMessage('change password failed')

}

const onSignOutSuccess = function () {
  successMessage('Signed Out successfully!')
  $('.signOut').hide()
}

const onSignOutFailure = function () {
  failureMessage('Sign Out failed')

}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignUpFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
