console.log("models/index.js reading");

const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
	'toDoList',
	'root',
	'123456',
	{
	  host: 'localhost',
	  dialect: 'mysql'
	}
  );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todos = require("./todo.model.js")(sequelize, Sequelize);

module.exports = db;
console.log("models/index.js done");
