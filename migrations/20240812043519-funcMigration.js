'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('func', { 
      func_id: {
        type: Sequelize.INTEGER(2),
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
      },
      funclist_id:{
        type:Sequelize.INTEGER(2),
        allowNull: false,
        reference:{
          model:{
            tableName:'funclist'
          },
          key: 'funclist_id'
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
      status:{
        type:Sequelize.STRING(10),
        allowNull: false
      }
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('func');
     
  }
};
