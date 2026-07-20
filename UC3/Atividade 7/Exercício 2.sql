-- 1
CREATE DATABASE monitor_precos;
USE monitor_precos;
--2
CREATE TABLE lojas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_loja VARCHAR(100) NOT NULL,
    site VARCHAR(150)
);

CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_categoria VARCHAR(50) NOT NULL
);

CREATE TABLE produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(100) NOT NULL,
    codigo_ean VARCHAR(15) NOT NULL,
    preco_desejado DECIMAL(10,2) NOT NULL,
    categorias_id INT,
    FOREIGN KEY (categorias_id) REFERENCES categorias(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE varreduras (
    id INT PRIMARY KEY AUTO_INCREMENT,
    data_varedura DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    preco_encontrado DECIMAL(10,2),
    url_produto VARCHAR(200),
    produtos_id INT,
    lojas_id INT,
    FOREIGN KEY (produtos_id) REFERENCES produtos(id) ON DELETE CASCADE,
    FOREIGN KEY (lojas_id) REFERENCES lojas(id) ON DELETE CASCADE
);

-- 5

INSERT INTO categorias (nome_categoria) VALUES
("Roupas"),
("Eletrônicos"),
("Produtos alimentícios");

INSERT INTO produtos (nome_produto, codigo_ean, preco_desejado, categorias_id) VALUES
("Monitor", "4898981600704", 254.20, 2),
("Tenis", "5627696853163", 148.46, 1),
("Limão", "3493954093544", 28.10, 3),
("Teclado", "5814662541122", 163.76, 2),
("Camiseta", "5915186528641", 118.62, 1);