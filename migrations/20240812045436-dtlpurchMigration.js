'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dtl_purch', { 
      dtl_purch_id: {
        type: Sequelize.INTEGER(15),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      purch_id:{
        type :Sequelize.INTEGER(6),
        allowNull: false,
        reference:{
          model:{
            tableName: 'purch'
          },
          key:'purch_id'
        },
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
        allowNull: true
      } ,
      price_buy:{
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
    await queryInterface.dropTable('dtl_purch');
    
  }
};
