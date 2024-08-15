'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dtl_sales', { 
      dtl_sales_id: {
        type: Sequelize.INTEGER(15),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }, 
      inv_id:{
        type :Sequelize.INTEGER(6),
        allowNull: false,
        reference:{
          model:{
            tableName: 'sales'
          },
          key:'inv_id'
        }
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
      qty:{
        type: Sequelize.INTEGER(15),
        allowNull: false
      } ,
      price_sell:{
        type: Sequelize.INTEGER(15),
        allowNull: true
      },
      p_disc:{
        type: Sequelize.INTEGER(15),
        allowNull: true
      },
      p_hpp:{
        type: Sequelize.INTEGER(15),
        allowNull: true
      },
      subtotal:{
        type: Sequelize.INTEGER(15),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('dtl_sales');
     
  }
};
