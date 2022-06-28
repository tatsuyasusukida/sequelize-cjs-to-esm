const models = require('./models-cjs')

main()

async function main () {
  try {
    await models.sequelize.sync({force: true})
    await models.sequelize.close()
  } catch (err) {
    console.error(err)
  }
}
