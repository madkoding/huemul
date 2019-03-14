// Description:
//   Siglas a un nombre / palabra de no + de 10 caracteres de largo
//
// Dependencies:
//   none
//
// Configuration:
//   none
//
// Commands:
//   huemul siglas <texto>
//
// Author:
//   @jorgeepunan

let rand = array => array[Math.floor(Math.random() * array.length)]

module.exports = function(robot) {
  robot.respond(/siglas (.*)/i, function(msg) {
    let i, len, letter, letters, input, ref, str

    input = msg.match[1]

    if (input.length > 10) {
      msg.send('Loco, no weís, máximo 10 caracteres. :loco2:')
    } else {
      letters = {
        a: ['Amoroso', 'Amable', 'Animal', 'Amigo'],
        b: ['Bello', 'Bellako', 'Bestia', 'Burro', 'Bacán', 'Borracho', 'Bakén'],
        c: ['Cómodo', 'Corredor', 'Camarero', 'Choriflai'],
        d: ['Diputado', 'Dije', 'Desainer'],
        e: ['Enfermo', 'Erótico', 'Ex'],
        f: ['Fornido', 'Fake', 'Fornido', 'Fronén'],
        g: ['Güiña', 'Grande', 'Gitano'],
        h: ['Huaso', 'Hipster', 'Haker', 'Humilde'],
        i: ['Inútil', 'Indigente', 'Iluso'],
        j: ['Jarcor', 'jQuery'],
        k: ['Kulero'],
        l: ['Lorea', 'Lolein', 'Lais'],
        m: ['Machucao', 'Maldito', 'Músico', 'Mariwanero'],
        n: ['Nerd', 'Nudista'],
        ñ: ['Ñoño'],
        o: ['Odioso', 'Otaco'],
        p: ['Peante', 'Pollo'],
        q: ['Querido', 'Quizás'],
        r: ['Ronrronero', 'Rellenito', 'Regio'],
        s: ['Sapo', 'Sagaz'],
        t: ['Tatuado', 'Teletón'],
        u: ['Uniceja', 'Urbano', 'Unicelular'],
        v: ['Vago', 'Vampiro', 'Violento'],
        w: ['Wey', 'Waka Waka'],
        x: ['Xoro'],
        y: ['Yananaika'],
        z: ['Zorrón', 'Zentaurus']
      }

      str = []
      ref = input
        .toLowerCase()
        .replace('á', 'a')
        .replace('é', 'e')
        .replace('í', 'i')
        .replace('ó', 'o')
        .replace('ú', 'u')
        .replace('ú', 'u')
        .replace(/[0-9]+$/, '')
      for (i = 0, len = ref.length; i < len; i++) {
        letter = ref[i]
        if (letters[letter] != null) {
          str.push(rand(letters[letter]))
        } else {
          str.push(letter)
        }
      }
      msg.send(`*${input}*: ${str.join(' ')}`)
    }
  })
}
