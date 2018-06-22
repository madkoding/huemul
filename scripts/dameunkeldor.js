// Description:
//   Muestra un @keldor al azar
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Command:
//   huemul dame un keldor
//
// Author:
//   @jorgeepunan

const images = [
  'https://i.imgur.com/Rvpfqg5.png',
  'https://i.imgur.com/J8fobgW.png',
  'https://i.imgur.com/bJc65wO.png',
  'https://i.imgur.com/nweNb7j.png',
  'https://i.imgur.com/MQuTVe2.png',
  'https://i.imgur.com/d8WMwU7.jpg',
  'https://i.imgur.com/yBOIkII.png',
  'https://i.imgur.com/NjOZRMx.png',
  'https://i.imgur.com/YLQMSDz.png',
  'https://i.imgur.com/L9MgNYe.jpg'
]

module.exports = robot => {
  robot.respond(/dame un keldor/gi, msg => msg.send(msg.random(images)))
}
