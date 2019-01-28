// Description:
//   Show random popular projects from kickstarter
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   kickstarter [tech | autos | cocina | iot]
//
// Author:
//   @edades

module.exports = robot => {
  robot.respond(/kickstarter (.*)/i, msg => {
    const term = msg.match[1]
    const popularTechProjects = `https://www.kickstarter.com/discover/popular?term=${term}&format=json`
    msg.send(`Cargando los proyectos de *${term}* más populares en Kickstarter :loading:`)
    robot.http(popularTechProjects).get()((err, res, body) => {
      if (err || res.statusCode !== 200) {
        return robot.emit('error', err || new Error(`Status code ${res.statusCode}`), msg)
      }
      const jsonData = JSON.parse(body)
      const projects = jsonData.projects.map(item => ({
        name: item.name,
        description: item.blurb,
        creator: item.creator.name,
        location: item.location.displayable_name,
        url: item.urls.web.project
      }))
      projects.map(item =>
        msg.send(`
						------------------------------------
						- Nombre: ${item.name}
						- Descripción: ${item.description}
						- Creado por: ${item.creator}
						- Ubicación: ${item.location}
						- Url: ${item.url}
						------------------------------------\n
					`)
      )
    })
  })
}
