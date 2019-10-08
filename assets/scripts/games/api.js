'use strict'

const config = require('./../config')
const store = require('../store')

const getGame = function () {
  // make GET request to /games
  console.log('in getGame')
  return $.ajax({
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

const createGame = function (data) {
  console.log('new game created')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const updateGame = function (data) {
  console.log('game updated')
  return $.ajax({
    url: config.apiUrl + '/games/' + data.game.id,
    method: 'PATCH', // --> to update
    data: data
  })
}

const showGame = function (data) {
  console.log('game shown')
  return $.ajax({
    url: config.apiUrl + '/games/' + data.game.id,
    method: 'GET'
  })
}

module.exports = {
  getGame,
  createGame,
  updateGame,
  showGame
}
