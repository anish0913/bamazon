var mysql = require("mysql");
//console.table npm from https://www.npmjs.com/package/console.table
var table = require("console.table");
var inquirer = require("inquirer");

var connection = mysql.createConnection(
{
	host: "localhost",
	port: 3306,
	user: "root",
	password: "anish0913",
    database: "bamazonDB"
});

// Create connection information for the sql database
function productItems() 
{
    connection.connect(function(err) 
    {
    connection.query("SELECT * FROM products", function(err, res) 
    {
	if (err) throw err
	else console.table(res , "\n");
	productId();
	});
});
}
productItems();

// Function which prompts the user for what action they should take
function productId() 
{
	inquirer.prompt([
	{
	type: "input",
	name: "id",
	message: "Please enter the Item ID of the product you would like to buy.\n",
// validate forms data
    validate: function(val) 
    {
// determines whether a value is Not a number // boolean operator to become true
    if (!isNaN(val) && val < 11) 
    {
	return true;
	}
	return false;
	}
	},

{
	type: "input",
	name: "quant",
	message: "How many units would you like to purchase? \n",
    validate: function(val) 
    {
    if (!isNaN(val))
    {
	return true;
	}
	return false;
	}
}
// when finished prompting updates database with new info
]).then(function(answer) 
{
    var userId = answer.id;
			console.log("Chosen Item: " , userId);
    var userQuant = answer.quant;
			console.log("Chosen Amount From Stock: " , userQuant , "\n");
    connection.query("SELECT * FROM products WHERE ?", [{ Item : answer.id }], function(err, res) {
	if (err) throw err;
			console.table(res);
	var current_quantity = res[0].Stock;
			console.log("Current Stock: " , current_quantity);
	var Price = res[0].Price;
	var remaining_quantity = current_quantity - answer.quant;
            console.log("Remaining Stock: " , remaining_quantity);
            
    if(current_quantity > answer.quant) 
    {
			console.log("Cost: " + (answer.quant * Price) + "\n");

connection.query("UPDATE products SET Stock=? WHERE Item=?",
[
    remaining_quantity, answer.id
],

// Response sends back to object res			
function(err, res)
{
	console.table(res);
});

connection.query("SELECT * FROM products", function(err, res) 
{
    console.log("Here is the updated inventory: ");
	console.log("------------------------------- \n");
	console.table(res);
});
} else 
{
	console.log("Insufficient Amount! ");
}
connection.end();
});
})
}