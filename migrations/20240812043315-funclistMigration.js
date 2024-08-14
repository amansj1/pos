'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('funclist', {
      funclist_id:{
        type:Sequelize.INTEGER(2),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      funcname:{
        type: Sequelize.STRING(50),
        allowNull: false
      },
      desc:{
        type: Sequelize.TEXT('long'),
        allowNull: true
      }

    });
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('funclist');
     
  }
};
