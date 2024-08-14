'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('supplier', { 
    supp_id: {
      type: Sequelize.INTEGER(4),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    loc_id:{
      type :Sequelize.INTEGER(2),
      allowNull: false,
      reference:{
        model:{
          tableName: 'location'
        },
        key:'loc_id'
      }
    },
    name: {type : Sequelize.STRING(30), allowNull: false},
    address: {type: Sequelize.TEXT('long'), allowNull: false},
    phone: {type: Sequelize.CHAR(16), allowNull:true},
    status: {type: Sequelize.STRING(8), allowNull: false},
    createdAt:{type: Sequelize.DATE, allowNull: false},
    updatedAt:{type: Sequelize.DATE, allowNull: false},
    deletedAt:{type: Sequelize.DATE, allowNull: false}

  });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('supplier');
    
  }
};
