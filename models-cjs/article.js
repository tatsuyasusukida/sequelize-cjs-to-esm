module.exports = function (sequelize, DataTypes) {
  const article = sequelize.define('article', {})

  article.associate = (models) => {
    article.belongsTo(models.user)
  }

  return article
}
