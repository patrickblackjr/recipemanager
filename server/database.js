import Sequelize from 'sequelize'

let db = {}

const sequelize = new Sequelize(
  'recipemanager',
  'recipemanager',
  'recipemanager',
  {
    host: 'localhost',
    port: '8000',
    dialect: 'mysql',
    define: {
      freezeTableName: true,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
)

let models = [require('./models/recipes')]

models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize)
  db[seqModel.name] = seqModel
})

Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
