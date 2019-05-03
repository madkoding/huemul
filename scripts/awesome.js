// Description:
//  Huemul muestra los links en awesome.devschile.cl según canal
//
// Dependencies:
//  needle
//
// Configuration:
//   None
//
// Commands:
//   huemul awesome <nombrecanal>
//
// Author:
//   @jorgeepunan

const needle = require('needle')
const md2json = require('md-2-json')

const file = 'https://raw.githubusercontent.com/devschile/awesome-devschile/master/README.md'
const link = 'https://awesome.devschile.cl/'

function findVal(object, key) {
  let value

  Object.keys(object).some(function(k) {
    if (k === key) {
      value = object[k]
      return true
    }
    if (object[k] && typeof object[k] === 'object') {
      value = findVal(object[k], key)
      return value !== undefined
    }
  })
  return value
}

module.exports = function(robot) {
  robot.respond(/awesome (\w+)/i, res => {
    const channel = `#${res.match[1]}`

    needle.get(file, (error, response) => {
      if (!error && response.statusCode == 200) {
        const markdown = response.body
        const jsonifyed = md2json.parse(markdown)
        const findChannelContent = findVal(jsonifyed, channel)

        if (findChannelContent) {
          res.send(
            `En Awesome devsChile para *${channel}* tenemos los siguientes links:\n\r${
              findChannelContent.raw
            }\n\rTodo el detalle en: <${link}|Awesome devsChile>`
          )
        } else {
          res.send(`¿Ayuda? Comando: \`huemul awesome <nombrecanal>\``)
        }
      }
    })
  })
}
