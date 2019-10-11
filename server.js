const express= require(`express`);
const app = express();

const PORT = process.env.PORT || 8080;

const exphbs = require("express-handlebars");
const burgerArr = require(`./models/burgers.js`)
const orm = require('./config/orm.js')

burgerArr.select();
orm.updateOne("Super Amazing Super Burger");



//start Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Server listen command 
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

//Allows CSS and Image files to be Loaded 
app.use(express.static('public'))
  
app.get("/", function(req, res) {




res.render("index")
});

