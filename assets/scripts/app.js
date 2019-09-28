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
  $('#btncreateGame').on('click', gamesEvents.onCreateGame)

  $('#btnSignIn').on('click', function (event) {
    $('main').show()
    $('.changePassword').show()
    $('.signOut').show()
    $('.signUp').hide()
  })

  $('#btnSignOut').on('click', function (event) {
    $('main').hide()
    $('.changePassword').hide()
    $('.signUp').show()
    $('.signIn').show()
  })

  $('.changePassword').hide()
  $('.signOut').hide()
  //$('main').hide()

   $('#btnClear').on('click', function (event){
      $('.box').empty()
    })
})
