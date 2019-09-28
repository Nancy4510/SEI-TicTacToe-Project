const config = require('./../config.js')
const store = require('../store')

const index = function () {
  console.log('in index');
  // make GET request to /games
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    method: 'GET'
  })
}

const create = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    headers: {
        Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const show = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.game.id,
    method: 'GET'
  })
}

const update = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.game.id,
    method: 'PATCH', //--> to update
    data: formData
  })
}

module.exports = {
  index,
  create,
  show,
  update
}
