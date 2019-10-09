'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gamesEvents = require('./games/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('submit', gamesEvents.onCreateGame)
  $('#get-games').on('click', gamesEvents.onGetGames)
  $('.box').on('click', gamesEvents.onClick)

  $('.changePassword').hide()
  $('.signOut').hide()
  $('main').hide()

  $('#btnSignIn').on('click', function (event) {
    $('main').show()
    $('.changePassword').show()
    $('.signOut').show()
    $('.signUp').hide()
    $('#title').hide()
    $('.signIn').hide()
    $('.row').hide()
  })

  $('#btnSignOut').on('click', function (event) {
    $('main').hide()
    $('.changePassword').hide()
    $('.signUp').show()
    $('.signIn').show()
    $('#title').show()
  })

  $('#btnChangePassword').on('click', function (event) {
    $('.changePassword').show()

    $('#btnNewGame').on('click', function (event) {
      $('.box').empty()
      $('.row').show()
      $('#gameMessage').show()
    })
  })
})
