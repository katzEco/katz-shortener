const CreateSlug = require('./modules/createSlug')
const IndexPage = require('./pages/index')

async function Routes(app, root) {
  app.get('/', (req, res) => {
    res.send(IndexPage)
  })

  await CreateSlug(app)
}

module.exports = Routes
