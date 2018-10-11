// Description:
//   Hubot script exclusivo para usuarios devsChile golden :monea: que muestra problemas de tránsito en Santiago (por ahora), Chile.
//
//  Dependencies:
//    cheerio
//
// Commands:
//   huemul uoct|taco|tr(aá)nsito
//
// Author:
//   @jorgeepunan

const moment = require('moment')

module.exports = function(robot) {
  robot.respond(/uoct|taco|tr(aá)nsito/i, function(msg) {
    function sendError(err, message) {
      if (err) {
        robot.emit('error', err)
      }
      msg.send('Error consultando UOCT: ' + message)
    }

    if (!robot.golden.isGold(msg.message.user.name)) {
      msg.send(
        'Esta funcionalidad es exclusiva para socios golden :monea: de devsChile. Dona en www.devschile.cl para participar de este selecto grupo :huemul-patitas: .'
      )
      return
    }

    const url = 'http://www.uoct.cl/historial/ultimos-eventos/json/'

    msg.send(
      `Buscando qué cagá está en esta ciudad :ql:   :walking: :boom: :car: :boom: :blue_car: :boom: :red_car: :boom:          :police_car:`
    )

    robot.http(url).get()(function(err, res, body) {
      const limiteDeEventos = 8

      if (err || res.statusCode !== 200) {
        sendError(err, 'no se pudo obtener eventos')
        return
      }
      var payload = JSON.parse(body)
      if (!payload.eventos || !Array.isArray(payload.eventos)) {
        sendError(null, 'mal formato de los datos recibidos')
        return
      }
      var events = payload.eventos
      if (events.length === 0) {
        msg.send('Qué raro, parece que está todo normal :thinking_bachelet: . Intenta más tarde.')
      }
      const eventList = events
        .slice(0, limiteDeEventos)
        .map(e => `${moment(e.fecha).format('hh:mm')}: (${e.comuna}) ${e.informacion}`)
        .join('\n')

      const plural = events.length > 1 ? ['s', 's'] : ['', '']
      const resume = 'Encontrado' + plural[0] + ' ' + events.length + ' resultado' + plural[1] + ' :bomb::fire:\n'
      const more =
        events.length > limiteDeEventos ? `\n<http://www.uoct.cl/historial/ultimos-eventos/|Ver más resultados>` : ''
      const text = `${resume}${eventList}${more}`

      msg.send(text)
    })
  })
}
