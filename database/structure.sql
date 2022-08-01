DROP DATABASE IF EXISTS premex_db;
CREATE DATABASE premex_db;
USE premex_db;

DROP TABLE IF EXISTS product_types;
CREATE TABLE product_types (
	product_type_id INT AUTO_INCREMENT NOT NULL,
	product_type VARCHAR(25) NOT NULL,
	PRIMARY KEY (product_type_id)
);

DROP TABLE IF EXISTS packaging_types;
CREATE TABLE packaging_types (
	packaging_type_id INT AUTO_INCREMENT NOT NULL,
	packaging_type VARCHAR(25) NOT NULL,
	PRIMARY KEY (packaging_type_id)
);

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
	employee_id INT AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(100) NOT NULL,
	PRIMARY KEY (employee_id)
);

DROP TABLE IF EXISTS products;
CREATE TABLE products  (
	product_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(100) NOT NULL,
    product_type_id INT NOT NULL,
    production_date DATE DEFAULT (CURRENT_DATE()) NOT NULL,
	employee_id INT NOT NULL, 
	production_time TIME NOT NULL,
	packaging_type_id INT NOT NULL,
	PRIMARY KEY (product_id),
	FOREIGN KEY (product_type_id) REFERENCES product_types(product_type_id),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
    FOREIGN KEY (packaging_type_id) REFERENCES packaging_types(packaging_type_id)
);