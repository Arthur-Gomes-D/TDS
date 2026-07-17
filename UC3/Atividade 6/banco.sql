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
("Lorem ipsum dolor sit amet consectetur adipiscing elit",63, 1),
("Donec hendrerit diam ut arcu tincidunt sodales", 10, 2),
("Ut aliquam accumsan arcu, at pulvinar nisi luctus id", 3599, 4),
("Sed non tortor eget felis rhoncus vestibulum ut ut orci", 1044, 3),
("Sed pharetra metus eu pharetra congue", 2701, 4),
("Phasellus condimentum, diam at elementum bibendum, metus libero imperdiet nisi, sed vulputate elit ante vitae ante", 3183, 1),
("Nunc aliquet accumsan libero ut efficitur", 2056, 2),
("Cras magna arcu, iaculis vitae mattis id, condimentum ut nulla", 9184, 3);

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

SELECT cliente.nome, produto.descricao, produto.valor
FROM clientes AS cliente
INNER JOIN pedidos AS produto
ON cliente.id_cliente = produto.id_cliente WHERE produto.valor > 100 ORDER BY produto.valor ASC;

SELECT * FROM pedidos WHERE id_cliente = 1;

DELETE FROM clientes WHERE id_cliente = 1;

SELECT * FROM pedidos;

SELECT * FROM alunos WHERE id_curso = 1;

DELETE FROM cursos WHERE id_curso = 1;

SELECT * FROM alunos;

-- os alunos que possuiam o curso de ID agora tem o id_curso como NULL

UPDATE cursos SET id_curso = 20 WHERE id_curso = 2;
SELECT * FROM alunos;

-- parte 9

-- 36

CREATE TABLE projetos (
    id_projeto INT PRIMARY KEY AUTO_INCREMENT,
    nome_projeto VARCHAR(100),
    id_func INT
);

ALTER TABLE projetos MODIFY COLUMN id_func INT,
ADD CONSTRAINT func_tem_projetos
FOREIGN KEY (id_func) REFERENCES funcionarios(id_func);

-- 37

CREATE TABLE dependentes (
    id_dep INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    id_func INT
);
ALTER TABLE dependentes MODIFY COLUMN id_func INT,
ADD CONSTRAINT dependentes_tem_func
FOREIGN KEY (id_func) REFERENCES funcionarios(id_func)
ON DELETE CASCADE;

-- parte 10

-- 38

SHOW CREATE TABLE alunos;

-- 39

SELECT TABLE_NAME, COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_SCHEMA = "lista_banco_relacional";

-- 40

SHOW CREATE TABLE funcionarios;

-- o nome é `1`

ALTER TABLE funcionarios DROP FOREIGN KEY `1`;

-- Desafio Final

CREATE TABLE autor (
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE livros (
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150),
    ano INT,
    id_autor INT,
    CONSTRAINT autor_escreve_livro FOREIGN KEY (id_autor) REFERENCES autor(id_autor) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO autor (nome) VALUES
("Alexander Vovin"),
("José de Anchieta"),
("Ferdinand de Saussure"),
("L. L. Zamenhof");

INSERT INTO livros (titulo, ano, id_autor) VALUES
("A Descriptive and Comparative Grammar of Western Old Japanese", 2004, 1),
("Man'yōshū — Book 1", 2009, 1),
("Arte de Gramática da Língua Mais Usada na Costa do Brasil", 1595, 2),
("Unua Libro", 1888, 4),
("Dua Libro", 1888, 4),
("Curso de Linguística Geral", 1916, 3);

SELECT autor.nome, livros.titulo
FROM autor
INNER JOIN livros
ON autor.id_autor = livros.id_autor;

SELECT livros.titulo, autor.nome
FROM livros
LEFT JOIN autor
ON livros.id_autor = autor.id_autor;

DELETE FROM autor WHERE id_autor = 4;

-- {print}

SELECT * FROM livros ORDER BY ano DESC LIMIT 3;