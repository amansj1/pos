'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('dtl_stock', { 
    dtl_stock_id:{
      type: Sequelize.INTEGER(55),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    prod_id:{
      type :Sequelize.INTEGER(6),
      allowNull: false,
      reference:{
        model:{
          tableName: 'product'
        },
        key:'prod_id'
      }
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
    stock_in:{
      type: Sequelize.INTEGER(15),
      allowNull: true
    },
    stock_out:{
      type: Sequelize.INTEGER(15),
      allowNull: true
    },
    actual_qty:{
      type: Sequelize.INTEGER(15),
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE}
  });
   
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('dtl_stock');
    
  }
};
