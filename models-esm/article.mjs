export default function article (sequelize, DataTypes) {
  const article = sequelize.define('article', {})

  article.associate = (models) => {
    article.belongsTo(models.user)
  }

  return article
}
