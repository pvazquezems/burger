CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER(10) PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
);