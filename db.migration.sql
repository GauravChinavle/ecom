CREATE DATABASE ECOM;

USE ECOM;


CREATE TABLE roles (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100),
	email VARCHAR(100) UNIQUE NOT NULL,
	role_id INT REFERENCES roles(id),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_activities (
	id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT REFERENCES users(id),
	last_active TIMESTAMP,
	is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE customers (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100),
	email VARCHAR(100) UNIQUE NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
	id INT AUTO_INCREMENT PRIMARY KEY,
	customer_id INTEGER REFERENCES customers(id),
	total_amount DECIMAL(6,2),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE products (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description TEXT,
	category VARCHAR(50),
	price DECIMAL(6,2),
	available BOOLEAN DEFAULT TRUE,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO roles (name) VALUES ('admin'), ('user'), ('guest');

INSERT INTO users (name, email, role_id) VALUES 
('Admin User', 'admin@example.com', 1),
('Regular User', 'user@example.com', 2),
('Guest User', 'guest@example.com', 3);


INSERT INTO user_activities (user_id, last_active, is_active) VALUES 
(1, NOW(), 1),
(2, NOW(), 1),
(3, NOW(), 0);


INSERT INTO customers (name, email) VALUES 
('Customer One', 'customer1@example.com'),
('Customer Two', 'customer2@example.com');

INSERT INTO orders (customer_id, total_amount) VALUES 
(1, 100.00),
(1, 200.00),
(2, 300.00);

INSERT INTO products (name, description, category, price, available) VALUES 
('Product One', 'Description One', 'electronics', 500.00, 1),
('Product Two', 'Description Two', 'home', 150.00, 1);
