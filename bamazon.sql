DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE Products (
 Item INTEGER NOT NULL AUTO_INCREMENT,
 Product VARCHAR (50),
 Department VARCHAR (50),
 Price DECIMAL(10,2),
 Stock INTEGER (10) NULL,
 
 PRIMARY KEY (Item)
 
);



INSERT INTO Products (Product, Department, Price, Stock)
VALUES 
("Xbox One X", "Gaming Consoles", 246.90, 40),
("Harry Potter Collection", "Books", 59.99, 100),
("Dingo Rawhide", "Pet Supplies", 15.79, 400),
("Macbook Pro 15-inch 2019", "Laptop Computers", 2499.99, 50),
("Eurmax Gazebo", "Lawn & Garden", 135.99, 150),
("Samsung Galaxy Buds", "Electronics", 117.99, 30),
("Codenames", "Toys & Games", 12.99, 450),
("HP LaserJet Pro", "Office Supplies", 428.90, 45),
("Macro Almond Knife Set", "Kitchen", 36.54, 200),
("Creality Ender 3 Pro 3D Printer", "Industrial", 239.00, 230);

SELECT *FROM Products;