

module.exports = {
  up: (queryInterface, Sequelize) => Promise.resolve(null),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('BlogPosts', null, {}),
};
