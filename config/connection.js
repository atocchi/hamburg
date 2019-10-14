// Set up MySQL connection.
const mysql = require("mysql");
const key = require("./keys.js");

//connection configuration 
const connection = mysql.createConnection({
  host: key.username,
  port: process.env.PORT || 3306,
  user: key.username,
  password: key.password,
  database: "heroku_3740580b24d4d53"
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
