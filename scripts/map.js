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
    const url = 'https://www.google.com/maps?q=' +
                location +
                '&t=m&z=' +
                zoom
    msg.send(`:world_map: ${url}`)
    msg.send(`:frame_with_picture: ${mapUrl}`)
  })
}
