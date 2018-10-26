DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
	item_ID INTEGER(100)AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price INTEGER (5) NOT NULL,
    stock_qty INTEGER (3),  
    PRIMARY KEY id
    
);

INSERT INTO products (product_name, department_name, price, stock_qty)
VALUES ('T-shirt', 'Tops', 20.00, 10),
		('Hoodie', 'Tops', 40.00, 10),
		('Tank', 'Tops', 15.00, 10),
		('Zip-up', 'Tops', 45.00, 10),
		('Hats', 'Headwear', 20.00, 10),
		('Beanie', 'Headwear', 15.00, 10),
		('Sweat Pant', 'Pants', 20.00, 10),
		('Scarf', 'Other', 10.00, 10),
		('Backpack', 'Accessories', 50.00, 10),
		('Phone Case', 'Accessories', 15.00, 10);
		



