const BlogPostFunction = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {});
  BlogPost.associate = function (models) {
    // associations can be defined here
  };
  return BlogPost;
};

module.exports = BlogPostFunction;

export default BlogPostFunction;
