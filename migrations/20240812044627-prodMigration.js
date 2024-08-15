'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product', { 
      prod_id: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      internal_id:{
        type: Sequelize.STRING(20),
        allowNull: false
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
      name:{
        type: Sequelize.STRING(50),
        allowNull: false
      },
      desc:{
        type: Sequelize.TEXT('long'),
        allowNull: true
      },
      groupprod:{
        type: Sequelize.STRING(12),
        allowNull: true
      },
      actual_qty:{
        type: Sequelize.INTEGER(15),
        allowNull:true
      },
      pricebuy:{
        type: Sequelize.INTEGER(15),
        allowNull:true
      },
      pricesell:{
        type: Sequelize.INTEGER(15),
        allowNull:true
      },
      pricesell2:{
        type: Sequelize.INTEGER(15),
        allowNull:true
      },
      limitqtyprice2:{
        type: Sequelize.INTEGER(3),
        allowNull:true
      },
      status:{
        type: Sequelize.STRING(8),
        allowNull: false
      },
      createdAt:{type: Sequelize.DATE, allowNull: false},
      updatedAt:{type: Sequelize.DATE, allowNull: true},
      deletedAt:{type: Sequelize.DATE, allowNull: true}

    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product');
    
  }
};
