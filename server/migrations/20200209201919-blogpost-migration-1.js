

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('BlogPosts', 'content', Sequelize.TEXT),

  down: (queryInterface, Sequelize) => queryInterface.changeColumn('BlogPosts', 'content', Sequelize.TEXT),
};
