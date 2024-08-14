'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('access', { 
      acc_id: {
        type: Sequelize.INTEGER(8),
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
      func_id:{
        type :Sequelize.INTEGER(2),
        allowNull: false,
        reference:{
          model:{
            tableName: 'func'
          },
          key:'func_id'
        }
      },
      role_id:{
        type :Sequelize.INTEGER(2),
        allowNull: false,
        reference:{
          model:{
            tableName: 'role'
          },
          key:'role_id'
        }
      },
      create:{type: Sequelize.BOOLEAN, allowNull:false},
      read:{type: Sequelize.BOOLEAN, allowNull:false},
      update:{type: Sequelize.BOOLEAN, allowNull:false},
      delete:{type: Sequelize.BOOLEAN, allowNull:false},

      
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('access');
  }
};
