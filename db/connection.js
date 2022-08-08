const mysql = require("mysql2");
const chalk = require("chalk");
const db = mysql.createConnection({
  host: "localhost",
  // username,
  user: "root",
  // password
  password: "Vtz%u61oF,4j]D.PwZ]:gs@?!ovIab4P}vG-z,x2Yi#v,kf0lH", //process.env.DB_PASSWORD,
  database: "employee_tracker",
});

module.exports = db;
