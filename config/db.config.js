console.log("config/db.config.js reading");

const database = 'toDoList';
const username = 'root';
const password = '123456';
const host = 'localhost';

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'mysql'
  },
  test: {
    username,
    password,
    database,
    host,
    dialect: 'mysql'
  },
  production: {
    username,
    password,
    database,
    host,
    dialect: 'mysql'
  }
};
console.log("config/db.config.js done");

