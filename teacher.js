var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var table = new Table({
    head: ['Item ID', 'Product Name', 'Hazard Group', 'Price per Unit', 'Price per g/mL', 'Stock Quantity in g/mL'],
});
var total = 0;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "teacher",
    password: "H()rr[]Y",
    database: "labInventoryDB"
});

var query = "SELECT * FROM substances";
connection.query(query, function (err, res) {
    if (err) throw err;
    //console.log(res);
    for (var i = 0; i < res.length; i++) {
        table.push([res[i].item_id, res[i].product_name, res[i].hazard_group, res[i].price_per_unit, res[i].price_per_g_or_mL,
        res[i].stock_quantity_g_or_mL]);
    }
    console.log(table.toString());
    runSearch();
});

function runSearch() {
    inquirer.prompt([
        {
            name: "product_id",
            type: "input",
            message: "Which substance have you used? Type in item_id"
        },
        {
            name: "quantity",
            type: "input",
            message: "How much have you used?"
        }

    ]).then(function (answer) {
        //console.log(table[answer.product_id -1][4]);
        console.log("answer", answer);
        var item_id = answer.product_id-1;
        var stock_quantity = table[item_id][5];
        price = table[item_id][4];
        if (stock_quantity < answer.quantity) {
            console.log("Insufficient quantity!");
        } else {
            var new_quantity = table[item_id][4] - answer.quantity;
            var update = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
            connection.query(update,[new_quantity, answer.product_id], function(err, result) {
                if (err) throw err;
                //console.log("stock_quantity is from " + stock_quantity + " to " + new_quantity + " updated.");
            });
            calculateTotal(price, answer.quantity);
        }
        console.log("\n\n");      
    });
}

function calculateTotal(price, quantity) {
    total = price * quantity;
    console.log("Your total is: $" + total.toFixed(2));
}