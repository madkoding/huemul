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
    'https://imgur.com/a/3Gq1LYN',
    'https://imgur.com/a/7IpKONP',
    'https://imgur.com/a/CinB8DY',
    'https://imgur.com/9GKaYjd',
    'https://imgur.com/XCG5pCP',
    'https://imgur.com/A3waVPT',
    'https://imgur.com/uvVKy3B',
    'https://imgur.com/6QDEMJl',
    'https://imgur.com/s2p2h9I',
    'https://imgur.com/GzpQONR',
    'https://imgur.com/04AXj2m',
    'https://imgur.com/AI3N5Xm',
    'https://imgur.com/3sHB6Qb',
    'https://imgur.com/kz7ApVE'
  ]
  
  module.exports = robot => {
    robot.respond(/dame un saurio/gi, msg => msg.send(msg.random(images)))
  }
  