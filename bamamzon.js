var mysql = require("mysql");
var inquirer = require("inquirer");
var answer = process.argv[2];

// // create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_DB"
});

// // connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// // *****************Heather, change this to a checkbox question**********************************
function start() {
  inquirer
    .prompt({
      name: "start",
      type: "list",
      message: "Welcome to Bamazon. What would you like to buy?",
      choices: ["Tops", "Headwear", "Accessories", "Pants", "Other"]
    })
    .then(function(response) {
      var answer = response.start;
      var asked = true;
    if(answer === "Tops"){
      console.log('Tops selected');
      if(asked = true){
        tops();
      }
      
    }
    if(answer === "Headwear"){
      console.log('Headware selected');
      if(asked = true){
        headwear();
      }
    }
    if(answer === "Accessories"){
      console.log('Accessories selected');
      if(asked = true){
        accessories();
      }
    }
    if(answer === "Pants"){
      console.log('Pants selected');
      if(asked = true){
        pants();
      }
    }
    if(answer === "Other"){
      console.log('Other selected');
      if(asked = true){
        other();
      }
    }
    });
}

function tops() {
  inquirer
    .prompt({
      name: "tops",
      type: "list",
      message: "what kind of top would you like to buy?",
      choices: ["T-Shirt", "Hoodie", "Zip-up Hoodie", "Tank", "RETURN"]
    })
    .then(function(response) {
      var answer = response.tops;
      var asked = true;
     if(answer === "T-Shirt"){
       console.log("t-shirt selected");
       if(asked === true){
         quanity();
       }
     }
     if(answer === "Hoodie"){
      console.log("Hoodie selected");
      if(asked === true){
        quanity();
      }
    }
    if(answer === "Zip-up Hoodie"){
      console.log("Zip-up Hoodie selected");
      if(asked === true){
        quanity();
      }
    }
    if(answer === "Tank"){
      console.log("Tank selected");
      if(asked === true){
        quanity();
      }
    }
    if(answer === "RETURN" && asked === true){
      console.log("**********Main Menu**********")
      start();
    }
    });
}

//Headwear
function headwear() {
  inquirer
    .prompt({
      name: "headwear",
      type: "list",
      message: "what kind of headwear would you like to buy?",
      choices: ["Ball Cap","Beanie", "RETURN"]
    })
    .then(function(response) {
      var answer = response.headwear;
      var asked = true;
     if(answer === "Ball Cap"){
       console.log("Ball Cap selected");
       if(asked === true){
         quanity();
       }
     }
     if(answer === "Beanie"){
      console.log("Beanine selected");
      if(asked === true){
        quanity();
      }
    }
    if(answer === "RETURN" && asked === true){
      console.log("**********Main Menu**********")
      start();
    }
    });
}

function quanity(){
  console.log("How many would you like?");
  //add a way to check db for inventory levels
  //make sure inventory is checked for product selected
}
//accessories

// other

start();


//**NOTE TO SELF**Whole project needs reworked. You need to display all of the contents for sale initially and let the 
//customer decice what they want based on the product id number. Then add total and change inventory levels. 
// The current way you have it is more complicated than it needs to be. Re-work when you have time. */