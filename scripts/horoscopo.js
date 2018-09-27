// Description:
//   Muestra el horóscopo del día según el signo
//
// Dependencies:
//   https://api.adderou.cl/tyaas/
//   Sluggin
//
// Configuration:
//   None
//
// Commands:
//   huemul horóscopo <signo zodiacal>
//
// Author:
//   @jorgeepunan

const Sluggin = require('Sluggin').Sluggin

const url = 'https://api.adderou.cl/tyaas/'

module.exports = function(robot) {
  robot.respond(/hor(o|ó)scopo(.*)/i, function(res) {
    let signo = Sluggin(res.match[2].toLowerCase().split(' ')[1])

    if (!signo) {
      res.send('Debes agregar un signo zodiacal.')
    } else {
      robot.http(url).get()(function(error, response, body) {
        if (!error && response.statusCode == 200) {
          const data = JSON.parse(body)
          res.send(`
Horóscopo de ${data.titulo} para ${data.horoscopo[signo].nombre}:
  · Amor 💖 : ${data.horoscopo[signo].amor}
  · Salud 🤕 : ${data.horoscopo[signo].salud}
  · Dinero 💰 : ${data.horoscopo[signo].dinero}
  · Color 🖌 : ${data.horoscopo[signo].color}
  · Número 🔢 : ${data.horoscopo[signo].numero}
          `)
        } else {
          res.send(':facepalm: Error: ', error)
        }
      })
    }
  })
}
