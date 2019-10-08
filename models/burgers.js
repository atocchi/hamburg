const orm = require ('.././config/orm.js');

let numbers = [];

//This will go through the mysql library and push theburger types to burgers
orm.selectAll(function(result) {
    let data = result
    for(i = 0; i < data.length; i++){
        burgers.push(data[i].burger_name);
    
    }
    return burgers;
    })

//this will go through the mysql library and push the ids to numbers 
orm.selectAll(function(result) {
    let data = result
    for(i = 0; i < data.length; i++){
           numbers.push(data[i].id);
        
    }
     return numbers;
    })
    


    module.exports = burgers, numbers;
    