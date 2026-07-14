CREATE DATABASE petshop;

USE petshop;

CREATE TABLE clientes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    cidade VARCHAR(50) NOT NULL
);

CREATE TABLE pets(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(30) NOT NULL,
    raca VARCHAR(50),
    idade INT NOT NULL,
    cliente_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

INSERT INTO clientes (nome, telefone, cidade) VALUES
("Elder Iria", "(99) 2225-3250", "Godofredo Viana"),
("Rosilene Hélio", "(51) 2337-2774", "Dezesseis de Novembro"),
("Porfírio Serafim", "(49) 3597-3771", "Nova Erechim"),
("Geraldo Leia", "(83) 2147-5515", "Pilõezinhos"),
("Zeferino Martim","(14) 3746-0223", "Salto de Pirapora");

INSERT pets (nome, especie, raca, idade, cliente_id) VALUES
("contact explosive", "cão", "SR", 2, 3),
("Yeak Laom", "gato", "SR", 4, 1),
("verhongeren","gato", "Gato de pelo curto europeu", 1, 2),
("эхолалия", "Hamster", "SR", 1, 4),
("labaza", "Capivara", "SR", 5, 5);

SELECT nome, idade FROM pets WHERE idade > 2 ORDER BY nome DESC LIMIT 1;

SELECT * FROM pets WHERE especie = gato

SELECT clientes.nome, pets.nome FROM clientes INNER JOIN pets ON pets.cliente_id = clientes.id;