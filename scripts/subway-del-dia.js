// Description:
//   Entrega el sandwich de Subway con descuento del dia en Chile
//
// Dependencies:
//   Moment
//
// Configuration:
//   None
//
// Commands:
//   huemul subway
//
// Author:
//   @jorgeepunan

const moment = require('moment')

const sandwiches = ['Jamón de Pavo', 'Trío de Carnes', 'Pizza', 'Pollo Apanado', 'B.M.T', 'Costillas BBQ Melt', 'Toscano']
const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

module.exports = function(robot) {
  robot.respond(/subway/i, function(res) {
    const currentWeekDayNum = moment().day()
    let de = (currentWeekDayNum === 0 || currentWeekDayNum === 2 || currentWeekDayNum === 3 || currentWeekDayNum === 5) ? 'de' : ''
    res.send(`Hoy *${dias[currentWeekDayNum]}* el sandwich del día en todos los Subway es el ${de} *${sandwiches[currentWeekDayNum]}*. Precio: $1.990 el de 15 cms.`)
  })
}
