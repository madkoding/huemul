// Description:
//   Huemul devuelve un mapa según lugar entregado
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   huemul map <lugar>
//
// Author:
//   @jorgeepunan

const apiKey  = process.env.GOOGLE_MAPS_API_KEY

module.exports = function(robot) {

  robot.respond(/map (.+)/i, function(msg) {
    let location = msg.match[1]
    const mapType = 'roadmap'
    const zoom = 12
    const mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=' +
                  location +
                  '&zoom=' +
                  zoom +
                  '&size=400x400&maptype=' +
                  mapType +
                  '&format=png&key=' +
                  apiKey
    const url = 'http://maps.google.com/maps?q=' +
                location +
                '&hl=en&sll=37.0625,-95.677068&sspn=73.579623,100.371094&vpsrc=0&hnear=' +
                location +
                '&t=m&z=12'
    msg.send(`:world_map: ${url}`)
    msg.send(`:frame_with_picture: ${mapUrl}`)
  })
}
