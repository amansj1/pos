'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('log', { 
      log_id: {type: Sequelize.INTEGER(15), allowNull: false, autoIncrement: true, primaryKey: true},
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
        allowNull: true,
        reference:{
          model:{
            tableName: 'func'
          },
          key:'func_id'
        }
      },
      action:{type: Sequelize.TEXT('long'), allowNull:true},
      data:{type: Sequelize.TEXT('long'), allowNull:true},
      status:{type: Sequelize.STRING(8), allowNull:true},
      user_id:{type: Sequelize.INTEGER(4),allowNull: false},
      createdAt:{type: Sequelize.DATE, allowNull: false}
    });
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('log');
     
  }
};
