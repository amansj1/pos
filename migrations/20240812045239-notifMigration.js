'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('notif', { 
    notif_id: {
      type: Sequelize.INTEGER(6),
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
    notif_date:{
      type: Sequelize.DATE,
      allowNull: false
    },
    notif_text:{
      type: Sequelize.TEXT('long'),
      allowNull: false
    },
    notif_status:{
      type: Sequelize.STRING(8),
      allowNull: false
    }
  });
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('notif');
   
  }
};
