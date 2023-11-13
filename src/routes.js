const IndexPage = require('./pages/index')

async function Routes(app, root) {
  app.get('/', (req, res) => {
    res.send(IndexPage)
  })
}

module.exports = Routes
