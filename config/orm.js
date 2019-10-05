const connection = require("./connection.js");

//blank query variable 
let query = "";

//This Query Selects all from the MYSQL DB
selectAll = () =>{
query = "SELECT * FROM burgers";
connection.query(query, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
};

//This Query Inserts the Variable into the MYSQL DB
insertOne = () =>{
query = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
connection.query(query,[burger, 0], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
};

//This Query updates a value in the mysql database (the boolean to true)
updateOne = () =>{
query = "UPDATE burgers SET ? WHERE ?";
connection.query(query,[{devoured: 1}, {burger_name: choice}], function(err, result) {
    if (err) throw err;
    console.log(result);
  }); 
};
//export this for the .JS file
module.exports = orm;