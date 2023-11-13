const cors = require('cors')
const bodyParser = require('body-parser')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

async function Middleware(app, exp, root) {
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  app.use(bodyParser.json())

  app.use(cors(corsOptions))

  app.use('/statics', exp.static(root + '/statics'))
}

module.exports = Middleware
