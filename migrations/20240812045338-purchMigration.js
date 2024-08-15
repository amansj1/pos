'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('purch', { 
      purch_id: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      no_po:{
        type: Sequelize.STRING(20),
        allowNull: true
      },
      no_inv_sup:{
        type: Sequelize.STRING(20),
        allowNull: true
      },
      loc_id:{
        type :Sequelize.INTEGER(2),
        allowNull: false,
        reference:{
          model:{
            tableName: 'location'
          },
          key:'loc_id'
        },
      },
      cust_id:{
        type :Sequelize.INTEGER(6),
        allowNull: false,
        reference:{
          model:{
            tableName: 'customer'
          },
          key:'cust_id'
        },
      },
      supp_id:{
        type :Sequelize.INTEGER(4),
        allowNull: false,
        reference:{
          model:{
            tableName: 'supplier'
          },
          key:'supp_id'
        },
      },
      user_id:{
        type :Sequelize.INTEGER(4),
        allowNull: false,
        reference:{
          model:{
            tableName: 'user'
          },
          key:'user_id'
        },
      },
      purch_date:{
        type: Sequelize.DATE,
        allowNull: true
      },
      po_date:{
        type: Sequelize.DATE,
        allowNull: true
      },
      paid_date:{
        type: Sequelize.DATE,
        allowNull: true
      },
      total_purch:{
        type: Sequelize.INTEGER(15),
        allowNull: true
      },
      total_paid:{
        type: Sequelize.INTEGER(15),
        allowNull: true
      },
      status:{
        type: Sequelize.STRING(8),
        allowNull: true
      },
      createdAt:{type: Sequelize.DATE, allowNull: false},
      updatedAt:{type: Sequelize.DATE, allowNull: true},
      deletedAt:{type: Sequelize.DATE, allowNull: true}
    }); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('purch');
  }
};
