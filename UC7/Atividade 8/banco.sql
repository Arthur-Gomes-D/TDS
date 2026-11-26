CREATE DATABASE IF NOT EXISTS escola_electron_simples
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE escola_electron_simples;

CREATE TABLE IF NOT EXISTS usuarios(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(100) NOT NULL UNIQUE,
    senha CHAR(32) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS alunos(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL DEFAULT ''
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS cursos(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    carga_horaria INT UNSIGNED NOT NULL,
    descricao VARCHAR(200) NOT NULL DEFAULT ''
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS matriculas(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT UNSIGNED NOT NULL,
    curso_id INT UNSIGNED NOT NULL,
    data_matricula DATE NOT NULL,
    CONSTRAINT uq_matricula_aluno_curso UNIQUE (aluno_id, curso_id),
    CONSTRAINT fk_matriculas_alunos FOREIGN KEY (aluno_id)
        REFERENCES alunos (id) ON DELETE RESTRICT,
    CONSTRAINT fk_matriculas_curso FOREIGN KEY (curso_id)
        REFERENCES cursos (id) ON DELETE RESTRICT
) ENGINE = InnoDB;

INSERT INTO usuarios ( usuario, senha ) VALUES(
    'admin', MD5('Aula#123')
)
ON DUPLICATE KEY UPDATE id = id;

CREATE USER IF NOT EXISTS 'escola_app'@'localhost'
    IDENTIFIED BY 'EscolaDB#2026!';

GRANT SELECT ON escola_electron_simples.usuarios TO 'escola_app'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON escola_electron_simples.alunos TO 'escola_app'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON escola_electron_simples.cursos TO 'escola_app'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON escola_electron_simples.matriculas TO 'escola_app'@'localhost';

USE escola_electron_simples;
SHOW TABLES;
SHOW CREATE TABLE matriculas;
SELECT usuario, CHAR_LENGTH(senha) AS tamanho_hase FROM usuarios;