import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.Promise = global.Promise

const connection = mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
})

connection
  .then((db) => db)
  .catch((err) => {
    console.log(err)
  })

export default connection
