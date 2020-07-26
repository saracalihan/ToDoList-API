const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
console.log("server.js reading");
var corsOptions= {
	origin: "http://localhost:3001"
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

//use only development db. It's RE-SYCNC the DB ************************************
//db.sequelize.sync({ force: false }).then(() => {
//  console.log("Drop and re-sync db.");
//});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ToDoList application. PATHS:  /task(post,get,delete) , /task/:id(post,get,delete,put(toUpdate)) " });
});


require("./routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
console.log("server.js done");

