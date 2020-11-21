// Description:
//   Busca pegas recientes en GetOnBrd
//
//  Dependencies:
//    cheerio
//
// Commands:
//   hubot pega|pegas|trabajo|trabajos <oficio> - Busca pegas recientes para el oficio seleccionado en GetOnBrd
//
// Author:
//   @jorgeepunan

const querystring = require('querystring')
const cheerio = require('cheerio')

module.exports = function (robot) {
  robot.respond(/(pega|pegas|trabajo|trabajos) (.*)/i, function (msg) {
    msg.send('Buscando en GetOnBrd... :dev:')

    const domain = 'https://www.getonbrd.com/jobs-'
    const busqueda = msg.match[2]
    const url = domain + querystring.escape(busqueda)

    robot.http(url).get()(function (err, res, body) {
      if (err || res.statusCode !== 200) {
        robot.emit('error', err || new Error(`Status code is ${res.statusCode}`), msg, 'pegas')
        msg.reply(':gob: tiene problemas en el servidor')
        return
      }
      const $ = cheerio.load(body)
      const resultados = []

      $('.gb-results-list > div').each(function () {
        const title = $(this)
          .find('.gb-results-list__title .color-hierarchy1')
          .first()
          .contents()
          .filter(function () {
            return this.type === 'text'
          })
          .text()
        const type = $(this).find('.gb-results-list__title .color-hierarchy3').text()
        const path = $(this).find('a').attr('href')

        resultados.push(`<${path}|${title} - ${type}>`)
      })

      if (resultados.length > 0) {
        const limiteResultados = resultados.length > 6 ? 5 : resultados.length
        const plural = resultados.length > 1 ? ['n', 's'] : ['', '']
        let text = `Se ha${plural[0]} encontrado ${resultados.length} resultado${plural[1]} para *${busqueda}*:\n`
        for (let i = 0; i < limiteResultados; i++) {
          const conteo = i + 1
          text += conteo + ': ' + resultados[i] + '\n'
        }
        if (resultados.length > limiteResultados) {
          text += `Más resultados en: <${url}|getonbrd>\n`
        }
        if (robot.adapter.constructor.name === 'SlackBot') {
          const options = { unfurl_links: false, as_user: true }
          robot.adapter.client.web.chat.postMessage(msg.message.room, text, options)
        } else {
          msg.send(text)
        }
      } else {
        msg.send(`No se han encontrado resultados para *${busqueda}*`)
      }
    })
  })
}
