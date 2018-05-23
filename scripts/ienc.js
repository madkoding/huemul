// Description:
//   Huemul enfatiza una frase como @ienc lo haría IRL
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   Huemul ienc <frase>
//
// Author:
//   @luchosaurio

module.exports = function(robot) {
  robot.respond(/ienc\s?(.*)/i, function(msg) {
    let frase = msg.match[1]
    msg.send(`:speaking_head_in_silhouette: *${frase.toUpperCase()}*`)
  })
}
