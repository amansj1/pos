'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('location', { 
      loc_id: {
        type :Sequelize.INTEGER(2),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    loc_name: {
        type :Sequelize.STRING(20),
        allowNull: false
    },
    address: {
        type :Sequelize.STRING(50),
        allowNull: true
    },
    npwp: {
        type :Sequelize.STRING(20),
        allowNull: true
    },
    invnumb: {
        type :Sequelize.STRING(20),
        allowNull: true
    },
    accessgranted: {
        type :Sequelize.STRING(20),
        allowNull: true
    },
    limit_cust: {
        type :Sequelize.INTEGER(3),
        allowNull: true
    },
    limit_supplier:{
        type :Sequelize.INTEGER(3),
        allowNull: true
    },
    limit_user :{ 
        type :Sequelize.INTEGER(3),
        allowNull: true
    },
    dateexpire :{
        type :Sequelize.DATE,
        allowNull: false
    }  
  });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
