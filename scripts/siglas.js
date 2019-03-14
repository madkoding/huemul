// Description:
//   Siglas a un nombre / palabra de no + de 16 caracteres de largo
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
        a: ['Amoroso', 'Amable', 'Animal', 'Amigo', 'Angel', 'Ábil', 'Author', 'a esta ora salen duendes'],
        b: ['Bello', 'Bellako', 'Bestia', 'Burro', 'Bacán', 'Borracho', 'Bakén', 'Beodo', 'Bruto', 'Becker', 'Barticciotto', 'bbcito', 'vueno'],
        c: ['Cómodo', 'Corredor', 'Camarero', 'Choriflai', 'Creativo', 'Cerati', 'Clamidia', 'Cristo', 'Cristiano', 'Callate'],
        d: ['Diputado', 'Dije', 'Desainer', 'Doppelganger', 'Druida', 'Dramático', 'Dragqueen'],
        e: ['Enfermo', 'Erótico', 'Ex', 'Enérgico', 'Estel', 'Ermético', 'Eléctrico', 'Ermantraut', 'each'],
        f: ['Fornido', 'Fake', 'Fronén', 'Feo', 'Fail', 'for', 'Florero', 'Firme', 'Fuerte', 'Fornai', 'FPMR'],
        g: ['Güiña', 'Grande', 'Gitano', 'Glorioso', 'Glamoroso', 'Great', 'Gigante', 'Germano', 'Golazo', 'García-Marquez', 'Gonzaleeeeeee'],
        h: ['Huaso', 'Hipster', 'Haker', 'Horneado', 'H-H', 'Help', 'Hartista', 'Helicóptero', 'http', 'https', 'HABER'],
        i: ['Inútil', 'Indigente', 'Iluso', 'Inspirado', 'Ileal', 'Inti-illimani'],
        j: ['Jarcor', 'jQuery', 'Jueves', 'Jal Berry', 'Jueeeee', 'Jaimito el cartero', 'Jorge'],
        k: ['Kulero', 'Kuin', 'K.O.', 'Kween', 'Kast', 'K PASA KING', 'King'],
        l: ['Lorea', 'Lolein', 'Lais', 'Llanto', 'Loquendo', 'Lavadora', 'Lobezno', 'Leonidas', 'La gran magia tropical'],
        m: ['Machucao', 'Maldito', 'Músico', 'Mariwanero', 'Micrero', 'Marcelo Cachureos', 'MIR', 'Modelo', 'Marinero', 'Marico', 'Mon amour'],
        n: ['Nerd', 'Nudista', 'NaN', 'Nada nuevo bajo el sol', 'No', 'Nube', 'Nadien', 'Nobody', 'Nuesni', 'Nonato', 'Narigón', 'Netflix'],
        ñ: ['Ñoño', 'Ñandú', 'Ñeeeeee', 'Ñau uwu'],
        o: ['Odioso', 'Otaco', 'owo', 'otro framework de js', 'Onvre', 'Orrible', 'Otra vez?', 'Orma del zapato', 'OH MY GOD'],
        p: ['Peante', 'Pollo', 'Pentest', 'PHP', 'Principe', 'Probeta', 'Provocame mujer', 'Prince Royce', 'Pablito Ruiz', 'Principe del rap', 'Provida', 'Promuerte'],
        q: ['Querido', 'Quizás', 'Quilapayun', 'Que queris ctm', 'Quelentaro', 'Quishpue', 'QUÉ', 'Quien es la que viene allí tan bonita y tan gentil', 'Q(o_oQ)'],
        r: ['Ronrronero', 'Rellenito', 'Regio', 'Roto', 'Raúl', 'Rock', 'ROOOOCK!', 'ROOOOOCK |mL', 'Rata', 'Ratero', 'Ruperto'],
        s: ['Sapo', 'Sagaz', 'Sutil', 'Superbonito', 'Suelta el whatsapp $:', 'Sapa', 'Sapolio', 'Si supieras', 'SAL', 'SOL', 'Solitario', 'Sabelotodo', 'Senil', 'Saul Goodman', 'Spotify'],
        t: ['Tatuado', 'Teletón', 'Tetona', 'Taxista', 'Tampoco', 'Tesoro', 'Trip', 'Trap', 'T-REX', 'T_T', 'Trechur (tesoro en inglés)', 'Talón de aquiles', 'Trepador', 'Talismán'],
        u: ['Uniceja', 'Urbano', 'Unicelular', 'Ulpo', 'Umilde', 'uwu'],
        v: ['Vago', 'Vampiro', 'Violento', 'Value', 'Volverás a mi', 'Viajero', 'Volátil', 'Vagabundo', 'Vueno', 'Voh vela', 'Vales oro'],
        w: ['Wey', 'Waka Waka', 'www-data', 'Weno', 'Weon', 'Wejejejeej', 'whatsapp', 'Watero', 'Well done'],
        x: ['Xoro', 'Xuxa', 'Xixixi lelele', 'Xauxera', 'Xaleco', 'XMEN', 'XVIDEOS'],
        y: ['Yananaika', 'Yuka', 'Yuta', 'Yaero', 'YA', 'YO', 'Ya vas a ver'],
        z: ['Zorrón', 'Zentaurus', 'Zulema', 'Zapato', 'Zolitario', 'Zabio', 'Zoldick', 'Zas!']
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
