import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      hooks: {
        async beforeCreate(user) {
          const salt = await bcrypt.genSalt(10);
          // eslint-disable-next-line no-param-reassign
          user.password = await bcrypt.hash(user.password, salt);
        },
      },
    });
  User.associate = models => {
    User.hasMany(models.BlogPost);
  };
  User.prototype.validPassword = async function validPassword(password) {
    return bcrypt.compare(password, this.password);
  };
  return User;
};
