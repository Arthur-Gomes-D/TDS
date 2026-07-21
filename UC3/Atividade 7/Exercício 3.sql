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
    FOREIGN KEY (departamentos_id) REFERENCES departamentos(id) ON DELETE CASCADE
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
    FOREIGN KEY (clientes_id) REFERENCES clientes(id) ON DELETE CASCADE,
    funcionarios_id INT,
    FOREIGN KEY (funcionarios_id) REFERENCES funcionarios(id) ON DELETE CASCADE
);

CREATE TABLE fornecedores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_fornceores VARCHAR(100) NOT NULL,
    cnpj VARCHAR(15) NOT NULL,
    telefone VARCHAR(20)
);

CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT NOT NULL,
    fornecedores_id INT,
    FOREIGN KEY (fornecedores_id) REFERENCES fornecedores(id) ON DELETE CASCADE
);

CREATE TABLE itens_vendas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    quantidade INT NOT NULL,
    proco_unitario DECIMAL(10,2),
    produtos_id INT,
    FOREIGN KEY (produtos_id) REFERENCES produtos(id) ON DELETE CASCADE,
    vendas_id INT,
    FOREIGN KEY (vendas_id) REFERENCES vendas(id) ON DELETE CASCADE
);

INSERT INTO departamentos (nome_departamento) VALUES 
("Tecnologia da Informação"),
("Financeiro"),
("Recursos Humanos");