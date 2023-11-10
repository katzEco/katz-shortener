const exp = require('express')
require('dotenv').config()

const Serve = require('./src/serve')
const Routes = require('./src/routes')
const app = exp()

Routes(app, __dirname)
Serve(app)
