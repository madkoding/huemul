// Description:
//   hubot sugiere algo para comer
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot qu[ée] [puedo][me sugieres (para)] desayunar|almorzar|cenar|tomar|comer
//   hubot qu[ée] [(me) sugieres (de)] desayuno|almuerzo|cena|tomar|comer
//
// Author:
//   @jorgeepunan
//
// Colaborator:
//   @madkoding

const kinds = {
  desayuno: [
    'cereal',
    'sandwich',
    'frutas',
    'desayuno en el dominó',
    'quesillo + marmelada',
    'huevos',
    'lo mismo que ayer'
  ],
  almuerzo: [
    'pescado',
    'comida árabe',
    'comida thai',
    'comida india',
    'pastas',
    'sushi',
    'comida china',
    'sandwich',
    'empanada',
    'ensalada',
    'pizza',
    'comida chatarra',
    'ceviche',
    'carne/parrilla',
    'lo mismo que ayer'
  ],
  cena: [
    'carne',
    'pastas',
    'comida árabe',
    'comida thai',
    'comida india',
    'pizza',
    'sanguche',
    'lo mismo que ayer',
    'lasagna',
    'ceviche',
    'comida china'
  ],
  bebidas: [
    'cerveza',
    'agüita de hierba',
    'piscola',
    'roncola',
    'whiscola',
    'absenta',
    'pájaro verde',
    'vino tinto/blanco',
    'lo mismo que ayer nomás'
  ],
  cervezas: [
    'pale ale inglesa',
    'brown ale inglesa',
    'barley wine',
    'scottish ale',
    'ale belga',
    'trapense belga',
    'de abadía belga',
    'pilsner alemana/checa',
    'dunkel alemana/checa',
    'marzenbier alemana',
    'bock/doppelbock/maibock',
    'weizenbier alemana',
    'porter/stout',
    'su escudo nomás',
    'IPA',
    'APA (gringa)'
  ]
}

attachResponse = (kind, msg) => {
  let title = ''
  switch (kind) {
    case 'desayuno':
    case 'almuerzo':
      title = 'Te sugiero:'
      break
    case 'cena':
      title = 'Para el *anvre*:'
      break
    case 'bebidas':
    case 'cervezas':
      title = 'Si tienes sed:'
      break
  }
  return msg.send({
    attachments: [
      {
        fallback: `${title} ${msg.random(kinds[kind])}`,
        color: '#36a64f',
        pretext: `${title}`,
        title: `${msg.random(kinds[kind])}`,
        footer: 'Come saludable',
        ts: new Date().getTime()
      }
    ]
  })
}

module.exports = robot => {
  robot.respond(/qu[ée] (puedo |(?:me )?sugieres (?:para )?)?desayunar/gi, msg => attachResponse('desayuno', msg))
  robot.respond(/qu[ée] ((?:me )?sugieres (?:de )?)?desayuno/gi, msg => attachResponse('desayuno', msg))

  robot.respond(/qu[ée] (puedo |(?:me )?sugieres (?:para )?)?almorzar/gi, msg => attachResponse('almuerzo', msg))
  robot.respond(/qu[ée] ((?:me )?sugieres (?:de )?)?almuerzo/gi, msg => attachResponse('almuerzo', msg))

  robot.respond(/qu[ée] (puedo |(?:me )?sugieres (?:para )?)?cenar/gi, msg => attachResponse('cena', msg))
  robot.respond(/qu[ée] ((?:me )?sugieres (?:de )?)?cena/gi, msg => attachResponse('cena', msg))

  robot.respond(/qu[ée] (puedo |(?:me )?sugieres (?:para )?)?tomar/gi, msg => attachResponse('bebidas', msg))
  robot.respond(/qu[ée] ((?:me )?sugieres (?:de )?)?tomar/gi, msg => attachResponse('bebidas', msg))

  robot.respond(/qu[ée] cerveza (puedo |(?:me )?sugieres (?:para )?)?tomar/gi, msg => attachResponse('cervezas', msg))
  robot.respond(/qu[ée] cerveza ((?:me )?sugieres (?:de )?)?tomar/gi, msg => attachResponse('cervezas', msg))

  robot.respond(/qu[ée] (puedo |(?:me )?sugieres (?:para )?)?comer/gi, msg =>
    msg.send('Depende de la comida para: *desayunar*, *almorzar* ó *cenar*. Pregúntame de nuevo.')
  )
}
