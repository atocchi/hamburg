const orm = require ('.././config/orm.js');

let burgers = [];

burgerArr = {

select: function(){
//This will go through the mysql library and push theburger types to burgers
orm.selectAll(function(result) {
    let data = result
    
    for(i = 0; i < data.length; i++){
        burgers.push(data[i].burger_name);
    
    }
    console.log(burgers)
    })
}
}


    module.exports = burgerArr;
    