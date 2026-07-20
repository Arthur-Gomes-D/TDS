-- 1

CREATE DATABASE crm_vendas;
USE crm_vendas;

-- 2

CREATE TABLE leads(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    telefone VARCHAR(20) UNIQUE,
    empresa VARCHAR(100) NOT NULL,
    data_cadastro DATE NOT NULL DEFAULT (CURRENT_DATE())
);

CREATE TABLE interacoes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100) NOT NULL,
    data_interacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    tipo INT,
    id_leads INT,
    FOREIGN KEY (id_leads) REFERENCES leads(id) ON DELETE CASCADE
);

CREATE TABLE oportunidades(
    id INT PRIMARY KEY AUTO_INCREMENT,
    produto_interesse VARCHAR(45) NOT NULL,
    valor_previsto DECIMAL(10,2) NOT NULL,
    status INT NOT NULL,
    data_criacao DATE NOT NULL,
    id_leads INT,
    FOREIGN KEY (id_leads) REFERENCES leads(id) ON DELETE CASCADE
);

--5

INSERT INTO leads (nome, email, telefone, empresa) VALUES
("Enoque Efraim", "enoq98@hotmail.com", "(53) 97227-7554", "Empresa"),
("Herberto Thaís", "herbeto123@gmail.com", "(53) 91045-6662", "Empresa Neura"),
("Ivone Adalberto", "ivoneadal21@gmail.com", "(53) 90951-8270", "Empresa ilegal 321"),
("Janaína Nilo", "nilo213@outlook.com", NULL, "Empresa legal 123");