

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BlogPosts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('BlogPosts'),
};
