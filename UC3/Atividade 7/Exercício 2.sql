-- 1
CREATE DATABASE monitor_precos;
USE monitor_precos;
--2
CREATE TABLE lojas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome_loja VARCHAR(100) NOT NULL,
    site VARCHAR(150)
);