// Description:
//   Muestra el horóscopo del día según el signo
//
// Dependencies:
//   https://api.adderou.cl/tyaas/
//
// Configuration:
//   None
//
// Commands:
//   huemul horóscopo <signo zodiacal>
//
// Author:
//   @jorgeepunan

const url = 'https://api.adderou.cl/tyaas/'

module.exports = function(robot) {
  const signs = [
    'aries',
    'tauro',
    'geminis',
    'cancer',
    'leo',
    'virgo',
    'libra',
    'escorpion',
    'sagitario',
    'capricornio',
    'acuario',
    'piscis'
  ].join('|')
  const pattern = new RegExp(`hor[oó]scopo\\s+(${signs})$`, 'i')
  robot.respond(pattern, function(res) {
    const signo = res.match[1].toLowerCase()
    robot.http(url).get()(function(error, response, body) {
      if (error || response.statusCode !== 200) {
        return res.send(':facepalm: Error: ', error)
      }
      try {
        const data = JSON.parse(body)
        res.send(`
Horóscopo de ${data.titulo} para ${data.horoscopo[signo].nombre}:
· Amor 💖 : ${data.horoscopo[signo].amor}
· Salud 🤕 : ${data.horoscopo[signo].salud}
· Dinero 💰 : ${data.horoscopo[signo].dinero}
· Color 🖌 : ${data.horoscopo[signo].color}
· Número 🔢 : ${data.horoscopo[signo].numero}
      `)
      } catch (err) {
        res.emit('error', err)
      }
    })
  })
}
