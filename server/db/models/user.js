module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    Username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});
  User.associate = function (models) {
    User.hasMany(models.BlogPost);
  };
  return User;
};
