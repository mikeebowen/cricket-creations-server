module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.TEXT,
  }, {});
  BlogPost.associate = function (models) {
    BlogPost.belongsTo(models.User, {foreignKey: {allowNull: false}});
  };
  return BlogPost;
};
