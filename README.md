# lab-inventory
## Description
This CLI node.js application provides a basic inventory app with MySQL.
teacher.js adjusts, amounts of substances that teachers have used for experiments, and displays total costs just for informational purposes.
manager.js provides 4 options: view all inventory, view low inventory, stock up inventory, or add new product.

## How to Run the App
To see the substances in the lab and take some as a teacher, simply run "node teacher.js" in your CLI. The prompts will guide you through the application.

To run the Manager options type "node manager.js" in your CLI. The prompts will guide you through the application.

## Used Technology
* Node.js,
* MySQL,
* npm packages: inquirer, mysql, cli-table

## Demo
#### Run node bamazonCustomer.js
![Teacher View of all Inventory](/images/Demo_Teacher01.PNG)
![Updated Inventory After experiment](/images/Demo_Teacher02.PNG)

#### Run node bamazonManager.js
![Manager View Substances + View Low Inventory + Add Inventory](/images/Demo_Manager01.PNG)
![Manager View Substances + Add New Substance](/images/Demo_Manager02.PNG)
![Manager View Substances + Quit Application](/images/Demo_Manager03.PNG)

## Known Issues
Currently the app needs to be quit and restarted to show updated values from database.

## License
MIT License Agreement

## Author
Sabine Hollatz