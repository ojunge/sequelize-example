'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('User', [{
       firstName: 'John',
       lastName: 'Doe',
       email: 'john.doe@gmail.com'
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     
    await queryInterface.bulkDelete('User', null, {});
     
  }
};
