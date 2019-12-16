'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('votes', {
      
      username: {
        type: Sequelize.STRING
      },
      vote_type_id: {
        type: Sequelize.STRING
      },
      vote_val: {
        type: Sequelize.STRING
      },
      timestamp: {
        type: Sequelize.TIME
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('votes');
  }
};