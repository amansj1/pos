'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('',{
      id:{
        type: Sequelize.INTEGER(30),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      location_name:{
        type: Sequelize.STRING(55),
        allowNull: false
      },
      address:{},
      npwp:{},
      invnumber:{},
      logo:{},
      accessgranted: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      dateExpired: {
        allowNull: false,
        type: Sequelize.DATE
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
