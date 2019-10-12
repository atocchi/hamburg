const express= require(`express`);
const app = express();

const PORT = process.env.PORT || 8080;

const exphbs = require("express-handlebars");
//calling dumb callback command 
const burger = require(`./models/burgers.js`)
//calling ORM
const orm = require('./config/orm.js')




// console.log(burgerArr.select())


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
burger.select(function(data){
let stupidOject = {burger: data};

  res.render("index", stupidOject)
})

});

