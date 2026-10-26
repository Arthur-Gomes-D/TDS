CREATE DATABASE IF NOT EXISTS escola_electron
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
USE escola_electron;

CREATE TABLE IF NOT EXISTS alunos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE
);

INSERT INTO alunos ( nome, email ) VALUES(
    'Ana Silva',
    'ana@example.com'
);

SELECT id, nome, email FROM alunos;

CREATE USER IF NOT EXISTS
 'crud_app'@'localhost'
 IDENTIFIED BY 'senacrs';
GRANT SELECT, INSERT, UPDATE, DELETE
 ON escola_electron.alunos
 TO 'crud_app'@'localhost';