// Set up MySQL connection.
const mysql = require("mysql");
const key = require("./keys.js");

//connection configuration 
const connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3306,
  user: "root",
  password: key,
  database: "burgers_db"
});

//Makes connection with DB
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export
module.exports = connection;
