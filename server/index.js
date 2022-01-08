const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')

const cors = require('cors')

const swaggerUi = require('swagger-ui-express')
const swaggerDocuments = require('./docs/main.json')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const options = {
  defaultExpanded: true,
  explorer: true
}

// connect to mongodb
mongoose.connect('mongodb://localhost/recipemanager').then(() => {
  const app = express()
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  app.use(bodyParser.json())
  app.use('/', routes)

  // catch errors
  app.use((err, req, res, next) => {
    const status = err.status || 500
    const msg = err.error || err.message
    // log.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
    res.status(status).send({ status, error: msg })
  })

  app.use(cors(corsOptions))
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocuments, options))

  app.listen(process.env.PORT || '3001', () => {
    console.log('Server ready for connections.')
  })
  module.exports = app
})
