const CreateSlug = require('./modules/slugs/createSlug')
const RedirectSlug = require('./modules/slugs/redirectSlug')
const IndexPage = require('./pages/index')

async function Routes(app, root) {
  app.get('/', (req, res) => {
    res.send(IndexPage)
  })

  await CreateSlug(app)
  await RedirectSlug(app)
}

module.exports = Routes
