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
    data_intecao DATETIME NOT NULL,
    tipo VARCHAR(45),
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

INSERT INTO leads (nome, email, telefone, empresa)