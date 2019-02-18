var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var table = new Table({
    head: ['Item ID', 'Product Name', 'Department Name', 'Price', 'Stock Quantity'],
});

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "manager",
    password: "H()rr[]Y2C0d3",
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
    runSearch();
});

function runSearch() {
    inquirer.prompt(
        {
            name: "option",
            type: "list",
            message: "Choose an option: ",
            choices: [
                "View All Inventory",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Substance",
                "Quit Application"
            ]
        }).then(function (answer) {
            switch (answer.option) {
                case "View All Inventory":
                    viewProducts();
                    break;
                case "View Low Inventory":
                    viewLowInventory();
                    break;
                case "Add to Inventory":
                    addInventory();
                    break;
                case "Add New Substance":
                    addNewProduct();
                    break;
                case "Quit Application":
                    quitApplication();
                    break;
            }
        });
}

function viewProducts() {
    console.log(table.toString());
    console.log("\n\n");
    runSearch();
}

function viewLowInventory() {
    var lowInventory = new Table({
        head: ['Item ID', 'Product Name',  'Hazard Group', 'Price per Unit', 'Price per g/mL', 'Stock Quantity in g/mL'],
    });
    //console.log(table.length);
    //console.log(table[4][4]);
    for (var i = 1; i < table.length; i++) {
        if (table[i][5] < 100) {
            lowInventory.push(table[i]);
        }
    }
    if (lowInventory[0]) {
        console.log(lowInventory.toString());
    } else {
        console.log("All items are in stock with 5 units or more.");
    }
    console.log("\n\n");
    runSearch();
}

function addInventory() {
    inquirer.prompt([
        {
            name: "product_id",
            type: "input",
            message: "Type in item_id of substance you want to add"
        },
        {
            name: "amount",
            type: "input",
            message: "How many g/mL do you want to add?"
        }
    ]).then(function (answer) {
        var item_id = answer.product_id - 1;
        var stock_quantity = table[item_id][5];
        var new_quantity = stock_quantity + parseInt(answer.amount);
        var update = "UPDATE substances SET stock_quantity_g_or_mL = ? WHERE item_id = ?";
        connection.query(update, [new_quantity, answer.product_id], function (err, result) {
            if (err) throw err;
            console.log("stock_quantity is from " + stock_quantity + " to " + new_quantity + " updated.");
        });
        console.log("\n\n");
        runSearch();
    })
}

function addNewProduct() {
    inquirer.prompt([
        {
            name: "product_name",
            type: "input",
            message: "What is the name of the new substance?"
        },
        {
            name: "hazard_group",
            type: "input",
            message: "Which is the hazard group?"
        },
        {
            name: "price_unit",
            type: "input",
            message: "What is the sales price per unit?"
        },
        {
            name: "price_g",
            type: "input",
            message: "What is the sales price per g/mL?"
        },
        {
            name: "stock_quantity",
            type: "input",
            message: "How many g/mL do you want to add?"
        },
    ]).then(function (answer) {
        console.log("answer");
        var insert = "INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)\n"
            + "VALUES(?, ?, ?, ?, ?)";
            console.log("insert", insert);
        connection.query(insert, [answer.product_name, answer.hazard_group, answer.price_unit, answer.price_g, answer.stock_quantity], function (err, result) {
            if (err) {
                console.log(err);
            }
            console.log("result", answer);
        });
        console.log("\n\n");
        runSearch();
    });
}

function quitApplication() {
    connection.end();
}