CREATE DATABASE erp_empresa;
USE erp_empresa;

CREATE TABLE departamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_departamento VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE funcionarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    cargo VARCHAR(100),
    salario DECIMAL(10,2),
    departamentos_id INT,
    FOREIGN KEY (departamentos_id) REFERENCES departamentos(id)
);

CREATE TABLE clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(25)
);

CREATE TABLE vendas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_venda DATETIME DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL (10,2),
    clientes_id INT,
    FOREIGN KEY (clientes_id) REFERENCES clientes(id),
    funcionarios_id INT,
    FOREIGN KEY (funcionarios_id) REFERENCES funcionarios(id)
);