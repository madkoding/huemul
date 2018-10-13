// Description:
//   Muestra un dinosaurio al azar
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Command:
//   huemul dame un saurio
//
// Author:
//   @jriveros

const images = [
  'https://i.imgur.com/a/M02kVmi',
  'https://i.imgur.com/a/gY1bS2M',
  'https://i.imgur.com/a/Q7QibR2',
  'https://i.imgur.com/a/3Gq1LYN',
  'https://i.imgur.com/a/7IpKONP',
  'https://i.imgur.com/a/CinB8DY',
  'https://i.imgur.com/9GKaYjd',
  'https://i.imgur.com/XCG5pCP',
  'https://i.imgur.com/A3waVPT',
  'https://i.imgur.com/uvVKy3B',
  'https://i.imgur.com/6QDEMJl',
  'https://i.imgur.com/s2p2h9I',
  'https://i.imgur.com/GzpQONR',
  'https://i.imgur.com/04AXj2m',
  'https://i.imgur.com/AI3N5Xm',
  'https://i.imgur.com/3sHB6Qb',
  'https://i.imgur.com/kz7ApVE'
]

module.exports = robot => {
  robot.respond(/dame un saurio/gi, msg => msg.send(msg.random(images)))
}
