'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Councils', {
      
      council_name: {
        type: Sequelize.STRING,
        primaryKey:true 

      },
      council_banner: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Councils');
  }
};