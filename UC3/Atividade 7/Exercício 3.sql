CREATE DATABASE erp_empresa;
USE erp_empresa;

CREATE TABLE departamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_departamento VARCHAR(100) NOT NULL UNIQUE
);