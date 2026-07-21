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
    cnpj VARCHAR(20) NOT NULL,
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

INSERT INTO funcionarios(nome, cargo, salario, departamentos_id) VALUES
("Ana Paula Souza", "Analista de RH", 4800.00, 3),
("Carlos Henrique Lima", "Assistente de RH", 3200.00, 3),
("Fernanda Oliveira", "Analista Financeiro", 5500.00, 2),
("Rafael Costa", "Desenvolvedor Full Stack", 8200.00, 1),
("Juliana Martins", "Suporte Técnico", 3900.00, 1);

INSERT INTO fornecedores(nome_fornceores, cnpj, telefone) VALUES
("Distribuidora Alfa Ltda.", "12.345.678/0001-90", "(11) 98765-4321"),
("Comercial Horizonte Ltda.", "23.456.789/0001-15", "(21) 99876-5432"),
("Tech Supply Comércio Ltda.", "34.567.890/0001-42", "(31) 99123-4567");

INSERT INTO produtos (nome_produto, preco, estoque, fornecedores_id) VALUES
("Notebook Dell Inspiron 15", 4299.90, 15, 3),
("Mouse Sem Fio Logitech M170", 89.90, 80, 3),
("Papel Sulfite A4 (500 folhas)", 29.90, 200, 1),
("Cadeira Ergonômica Office", 899.90, 25, 2),
('Monitor LED 24" Full HD', 1049.90, 30, 3),
("Caneta Esferográfica Azul (Caixa c/50)", 54.90, 120, 1);