'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      user_id: {type: Sequelize.INTEGER(4),allowNull: false, autoIncrement: true, primaryKey: true},
      username: {type: Sequelize.STRING(10), allowNull:false},
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
      name: {type: Sequelize.STRING(25), allowNull:false},
      pass: {type: Sequelize.TEXT('long'), allowNull:false},
      token: {type: Sequelize.TEXT('long'), allowNull:false},
      email: {type: Sequelize.STRING(50), allowNull:false},
      notes: {type: Sequelize.TEXT('long'), allowNull:false},
      status: {type: Sequelize.STRING(5), allowNull:false},
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }

    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    
  }
};
