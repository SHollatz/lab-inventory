CREATE DATABASE labInventoryDB;

USE labInventoryDB;

CREATE TABLE substances (
   item_id INT NOT NULL AUTO_INCREMENT,
   product_name VARCHAR(255) NULL,
   hazard_group VARCHAR(255) NULL,
   price_per_unit DECIMAL (10,2) NOT NULL,
   price_per_g_or_mL DECIMAL (15,5) NOT NULL,
   stock_quantity_g_or_mL Decimal (10,2) NOT NULL,
   PRIMARY KEY (item_id)
);

INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)
VALUES("Methanol", "flammable liquid", 13.76, 0.02752, 500);

INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)
VALUES("Ethanol", "flammable liquid", 49.18, 0.04918, 1000);

INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)
VALUES("Acetone", "flammable liquid", 59.25, 0.01185, 5000);

INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)
VALUE("Hexane", "flammable liquid", 324, 6.48, 50);

INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)
VALUE("Hydrochloric acid", "inorganic acid", 58.29, 0.11658, 500);

INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)
VALUES("Sulfuric acid", "inorganic acid", 126.63, 0.05065, 2500);

INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)
VALUES("Silver cloride", "Toxic chemicals", 165.57, 6.6228, 25);

INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)
VALUES("Sodium", "Alkali metal", 24.45, 2.445, 10);

INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)
VALUE("Potassium", "Alkali metal", 24.45, 2.445, 10);

INSERT INTO substances (product_name, hazard_group, price_per_unit, price_per_g_or_mL, stock_quantity_g_or_mL)
VALUE("Lithium", "Alkali metal", 20.75, 8.3, 2.5);

SELECT * FROM substances;
