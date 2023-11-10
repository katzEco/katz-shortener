const color = require('bash-color')
const DateLine = require('./modules/date')

function Serve(app) {
  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log('')
    console.log(`Server Starting @ ${color.cyan(`http://localhost:${PORT}`)}`)
    console.log(`Last Updated: ${DateLine}`)
  })
}

module.exports = Serve
