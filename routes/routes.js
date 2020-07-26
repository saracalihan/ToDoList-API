console.log("routes/router.js reading");

module.exports = app => {
	const todos = require("../controllers/todo.controller.js");

	var router = require("express").Router();

	//create a new todo
	router.post("/task", todos.create);

	router.get("/task", todos.findAll);
	//other routers 
	router.delete("/task", todos.deleteAll)
	//...
	router.get("/task/:id", todos.findOne);

	router.delete("/task/:id",todos.delete);

	router.put("/task/:id",todos.update);


	app.use('/', router);
};
console.log("routes/router.js done");

