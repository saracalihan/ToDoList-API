console.log("controllers/todo.controller.js reading");

const db = require("../models");
const Todo = db.todos;
const Op = db.Sequelize.Op;

// Create and Save a new todo
exports.create = (req, res) => {
	if (!req.body.taskName) {
		res.status(400).send({
	        	message: "Content can not be empty!"
	  });
	  return;
	}
	const todo = {
			taskName: req.body.taskName,
			precedence: req.body.precedence,
			finishingRate: req.body.finishingRate,	
			startDate: req.body.startDate,
			finishDate: req.body.finishDate
	};
	//save todo in the database
	Todo.create(todo)
		.then(data => {
			res.send(data);
			alert(`created a new todo ${todo.taskName}`);
		})
		.catch(err => {
			res.status(500).send({
				message: err.message || "some error occurred while creating the todo!"
			});
		});
	

};

// Retrieve all Tasks from the database.
exports.findAll = (req, res) => {
	const taskName = req.query.taskName;
  var condition = taskName ? { taskName: { [Op.like]: `%${taskName}%` } } : null;

  Todo.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tasks."
      });
    });
};

// Find a single Task with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Todo.findByPk(id)
	  .then(data => {
		    if(data)
				res.send(data);
			else
				res.send({message: "Error! We can't find id=" + id});	
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error retrieving Task with id=" + id
		});
	  });
};

// Update a Task by the id in the request
exports.update = (req, res) => {
	const id = req.params.id;
	Todo.update(req.body, {
		where: {id: id}
	}).then(num => {
		if(num == 1)
			res.send({message: `Id= ${id} was updated saccesfully`});
		else
		;
	}).catch(err => {
		res.status(500).send({
			message: "Error updating Tutorial with id="+id
		})
	})
};

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;
	Todo.findByPk(id)
	  .then(data =>{name = data.taskName});
	Todo.destroy({where: {id: id}})
	  .then(num => {
		if (num == 1) {
		  res.send({
			message: `${ name } named task was deleted successfully!`
		  });
		} else {
		  res.send({
			message: `Cannot delete task with id=${id}. Maybe Task was not found!`
		  });
		}
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Could not delete task with id=" + id
		});
	  });
};

// Delete all task from the database.
exports.deleteAll = (req, res) => {
	Todo.destroy({
		where: {}
	  })
		.then(nums => {
		  res.send({ message: `${nums} task were deleted successfully!` });
		})
		.catch(err => {
		  res.status(500).send({
			message:
			  err.message || "Some error occurred while removing all task."
		  });
		});
};

console.log("controllers/todo.controller.js done");
