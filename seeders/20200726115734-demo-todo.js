'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var todos = [];
     for(let i=1;i<=10;i++){
       todos.push({
        taskName: "Demo-task"+i,
        precedence: i%2,
        finishingRate: 0.1 * i,
        startDate: new Date(),
        finishDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
     }
    return queryInterface.bulkInsert('todos', todos);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('todos', null, {});   
  }
};
