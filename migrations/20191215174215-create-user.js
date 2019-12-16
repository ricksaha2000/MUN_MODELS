'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      
      username: {
        type: Sequelize.STRING , 
        primaryKey:true 
      },
      password: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.NUMBER
      },
      profile_pic_url: {
        type: Sequelize.STRING
      },
      stance: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};