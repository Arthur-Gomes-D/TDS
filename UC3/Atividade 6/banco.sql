CREATE DATABASE lista_banco_relacional;
USE lista_banco_relacional;

CREATE TABLE departamentos(
    id_depto INT PRIMARY KEY AUTO_INCREMENT,
    nome_depto VARCHAR(100) NOT NULL
);

CREATE TABLE funcionarios(
    id_func INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    salario DECIMAL(10,2),
    id_depto INT,
    FOREIGN KEY (id_depto) REFERENCES departamentos(id_depto)
);

CREATE TABLE cursos(
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    nome_curso VARCHAR(100) NOT NULL,
    carga_horaria INT
);

CREATE TABLE alunos(
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nota DECIMAL(10,2),
    cidade VARCHAR(50),
    id_curso INT,
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE clientes(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100)
);

CREATE TABLE pedidos(
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(200),
    valor DECIMAL(10,2),
    id_cliente INT,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) ON DELETE CASCADE
);

INSERT INTO departamentos (nome_depto) VALUES 
("TI"),
("Financeiro"),
("Recursos Humanos");

INSERT INTO funcionarios (nome, salario, id_depto) VALUES
("Tito Vítor", 3400, 3),
("Paula Dulce", 5622, 2),
("Aníbal Salvador", 3400, 3),
("Marinalva Matilde", 3000, 1),
("Romário Jacó", 0, NULL),
("Enoque Romeu", 0, NULL);

INSERT INTO cursos (nome_curso, carga_horaria) VALUES
("Análise de Sistemas", 2000),
("Design Gráfico", 2520),
("Administração", 3000);

INSERT INTO alunos (nome, cidade, id_curso) VALUES
("Evandro Iria", "Rio de Janeiro", 3),
("Chico Saturnino", "São Paulo", 2),
("Bethânia Amadeu", "Aquidauana", 1),
("Argentina Messias", "Recursolândia", NULL),
("Urbano Luzia", "Jaçanã", 1),
("Torquato Julinha", "Pelotas", 3);

INSERT INTO clientes (nome, email) VALUES
("Ofélia Aurélia", "feliaaurelia@gmail.com"),
("Horácio Gael", "horagael@gmail.com"),
("Valmir Glória", NULL),
("Laurinda Gregório", "gregorioorio@gmail.com");

INSERT INTO pedidos (descricao, valor, id_cliente) VALUES
("Lorem ipsum dolor sit amet consectetur adipiscing elit", , ),
("Donec hendrerit diam ut arcu tincidunt sodales", , ),
("Ut aliquam accumsan arcu, at pulvinar nisi luctus id", , ),
("Sed non tortor eget felis rhoncus vestibulum ut ut orci", , ),
("Sed pharetra metus eu pharetra congue", , ),
("Phasellus condimentum, diam at elementum bibendum, metus libero imperdiet nisi, sed vulputate elit ante vitae ante", , ),
("Nunc aliquet accumsan libero ut efficitur", , ),
("Cras magna arcu, iaculis vitae mattis id, condimentum ut nulla", , );

INSERT INTO funcionarios (nome, salario, id_depto) VALUES
("Nelson Víctor", 3400, 999);

-- Não foi possivel adicionar o funcionario

SELECT * FROM funcionarios;

SELECT nome, salario FROM funcionarios;

SELECT * FROM alunos WHERE cidade = "Pelotas";

SELECT * FROM funcionarios WHERE salario > 3000;

SELECT * FROM funcionarios ORDER BY nome ASC;

SELECT * FROM funcionarios ORDER BY salario DESC;

SELECT * FROM alunos LIMIT 3;

SELECT nome AS nome_do_aluno, nota AS media_final FROM alunos;

SELECT a.nome, a.nota FROM alunos AS a;

SELECT funcionarios.nome, departamentos.nome_depto
FROM funcionarios
INNER JOIN departamentos
ON funcionarios.id_depto = departamentos.id_depto;

SELECT f.nome, d.nome_depto 
FROM funcionarios AS f 
INNER JOIN departamentos AS d
ON f.id_depto = d.id_depto;

SELECT alunos.nome, cursos.nome_curso
FROM alunos
INNER JOIN cursos
ON alunos.id_curso = cursos.id_curso;

SELECT alunos.nome, cursos.nome_curso
FROM alunos
INNER JOIN cursos
ON alunos.id_curso = cursos.id_curso WHERE alunos.nota > 7;

SELECT clientes.nome, pedidos.descricao
FROM clientes
INNER JOIN pedidos
ON clientes.id_cliente = pedidos.id_cliente;

SELECT alunos.nome, cursos.nome_curso
FROM alunos
LEFT JOIN cursos
ON alunos.id_curso = cursos.id_curso;

SELECT funcionarios.nome, departamentos.nome_depto
FROM funcionarios
LEFT JOIN departamentos
ON funcionarios.id_depto = departamentos.id_depto;

SELECT alunos.nome, cursos.nome_curso
FROM alunos
LEFT JOIN cursos
ON alunos.id_curso = cursos.id_curso ORDER BY alunos.nome ASC;

SELECT aluno.nome, curso.nome_curso, aluno.nota
FROM alunos AS aluno
INNER JOIN cursos AS curso
ON aluno.id_curso = curso.id_curso WHERE nota > 7 ORDER BY nota DESC LIMIT 5;

SELECT cliente.nome, produto