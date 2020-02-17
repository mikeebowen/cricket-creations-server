

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('BlogPosts', 'UserId', {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('BlogPosts', 'UserId'),
};
