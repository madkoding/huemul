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
    let i, len, letter, letters, input, ref, str, maxChars

    input = msg.match[1]
    maxChars = 16

    if (input.length > maxChars) {
      msg.send(`Loco, no weís, máximo ${maxChars} caracteres. :loco2:`)
    } else {
      letters = {
        a: ['Amoroso', 'Amable', 'Animal', 'Amigo'],
        b: ['Bello', 'Bellako', 'Bestia', 'Burro', 'Bacán', 'Borracho', 'Bakén', 'Beodo'],
        c: ['Cómodo', 'Corredor', 'Camarero', 'Choriflai'],
        d: ['Diputado', 'Dije', 'Desainer'],
        e: ['Enfermo', 'Erótico', 'Ex'],
        f: ['Fornido', 'Fake', 'Fronén', 'Feo'],
        g: ['Güiña', 'Grande', 'Gitano', 'Glorioso'],
        h: ['Huaso', 'Hipster', 'Haker', 'Humilde'],
        i: ['Inútil', 'Indigente', 'Iluso', 'Inspirado'],
        j: ['Jarcor', 'jQuery'],
        k: ['Kulero'],
        l: ['Lorea', 'Lolein', 'Lais'],
        m: ['Machucao', 'Maldito', 'Músico', 'Mariwanero'],
        n: ['Nerd', 'Nudista', 'NaN'],
        ñ: ['Ñoño'],
        o: ['Odioso', 'Otaco'],
        p: ['Peante', 'Pollo'],
        q: ['Querido', 'Quizás'],
        r: ['Ronrronero', 'Rellenito', 'Regio'],
        s: ['Sapo', 'Sagaz'],
        t: ['Tatuado', 'Teletón', 'Tetona'],
        u: ['Uniceja', 'Urbano', 'Unicelular', 'Ulpo'],
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
