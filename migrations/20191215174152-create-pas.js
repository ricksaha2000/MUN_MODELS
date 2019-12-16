'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pas', {
      
      type: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.STRING,
        primaryKey:true 

      },
      time_to_talk: {
        type: Sequelize.NUMBER
      },
      title: {
        type: Sequelize.STRING
      },
      proposed_by: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pas');
  }
};