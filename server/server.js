require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes.js')
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

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connection to db established'))

app.use(express.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocuments, options))

app.use('/', routes)
app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
)
