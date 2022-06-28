import {Sequelize, DataTypes} from 'sequelize'
import article from './article.mjs'
import user from './user.mjs'

const sequelize = new Sequelize(process.env.DB_URL)
const models = {
  article: article(sequelize, DataTypes),
  user: user(sequelize, DataTypes),
}

Object.keys(models).forEach(key => {
  if (models[key].associate) {
    models[key].associate(models)
  }
})

models.sequelize = sequelize
export default models
