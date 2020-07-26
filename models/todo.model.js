'use strict';
console.log("models/todo.models.js reading");
module.exports = (sequelize, Sequelize) => {
	const todo = sequelize.define("todos", {
		taskName: {
			type: Sequelize.STRING
		},
		precedence: {
			type: Sequelize.BOOLEAN
		},
		finishingRate: {
			type: Sequelize.FLOAT
		},
		startDate: {
			type: Sequelize.DATE
		},
		finishDate: {
			type: Sequelize.DATE
		}
	})
	console.log("models/todo.models.js done");

	return todo;
}