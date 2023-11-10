const color = require('bash-color')

function Serve(app) {
  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log('')
    console.log(`Server Starting @ ${color.cyan(`http://localhost:${PORT}`)}`)
    console.log('')
  })
}

module.exports = Serve
