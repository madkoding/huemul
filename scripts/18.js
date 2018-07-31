// Description:
//   Huemul te dice cuánto falta pal 18 de septiembre en Chile, fiestas patrias.
//
// Dependencies:
//   Moment
//
// Commands:
//   huemul 18
//
// Author:
//   @jorgeepunan

const moment = require('moment')
const frases = [
  'Preparen la sed.',
  'Tiqui-tiqui-tíiiiiiiii',
  '¡A viajar fuera de Chile patriotas!'
]

module.exports = robot => {
  robot.respond(/18\s?(.*)/i, msg => {
    const eventdate = moment('2018-09-18')
    const todaysdate = moment()
    msg.send(`:flag-cl: Quedan ${eventdate.diff(todaysdate, 'days')} días pa'l 18 de septiembre.`)
    msg.send(`:huemul-huaso: ${msg.random(frases)}`)
  })
}
