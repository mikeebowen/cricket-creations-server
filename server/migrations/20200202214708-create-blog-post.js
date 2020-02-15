module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BlogPosts', {
    title: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('BlogPosts'),
};
